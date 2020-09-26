import {
  AppBar,
  Avatar,
  Badge,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  TableBody,
  TableCell,
  TableRow,
  SwipeableDrawer,
  Table,
  Toolbar,
  colors,
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SignInCard from "./SignInCard";
import {
  AccountCircle,
  ExitToApp,
  Message,
  More,
  MoreVert,
  Notifications,
} from "@material-ui/icons";
import FirebaseApp from "../FirebaseApp";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function HomeAppBar(props) {
  const user = FirebaseApp.auth().currentUser;
  const [loginPage, setLoginPage] = React.useState(false);
  const [userMenuAnchor, setUserMenuAnchor] = React.useState(null);
  const isUserMenuOpen = Boolean(userMenuAnchor);
  const toggleLoginPage = () => {
    setLoginPage(true);
  };
  const handleLoginPageClose = () => {
    setLoginPage(false);
  };
  const [drawerState, setDrawerState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerState(open);
  };
  const classes = useStyles();
  const userMenuId = "user-menu";
  const handleUserMenuOpen = (event) => {
    setUserMenuAnchor(event.currentTarget);
  };
  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
  };
  const userMenu = (
    <>
      {user != null && (
        <Menu
          id={userMenuId}
          anchorEl={userMenuAnchor}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={isUserMenuOpen}
          onClose={handleUserMenuClose}
        >
          <Table>
            <TableBody>
              <MenuItem onClick={handleUserMenuClose}>
                <TableRow>
                  <TableCell>
                    <Avatar src={user.photoURL} />
                  </TableCell>
                  <TableCell>{user.displayName}</TableCell>
                </TableRow>
              </MenuItem>
              <MenuItem onClick={handleUserMenuClose}>
                <TableRow>
                  <TableCell>
                    <Avatar color={colors.white}>
                      <ExitToApp />
                    </Avatar>
                  </TableCell>
                  <TableCell> Log Out</TableCell>
                </TableRow>
              </MenuItem>
            </TableBody>
          </Table>
        </Menu>
      )}
    </>
  );
  return (
    <div>
      <AppBar position={"fixed"} className={classes.appBar}>
        <Toolbar>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <div className={classes.grow} />

          {user == null && (
            <div className={classes.sectionDesktop}>
              <IconButton onClick={toggleLoginPage}>
                <AccountCircle />
              </IconButton>
            </div>
          )}
          {user != null && (
            <div className={classes.sectionDesktop}>
              <IconButton>
                <Badge>
                  <Message />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge>
                  <Notifications />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={userMenuId}
                aria-haspopup="true"
                color="inherit"
                onClick={handleUserMenuOpen}
              >
                <Avatar src={user.photoURL} />
              </IconButton>
            </div>
          )}

          <div className={classes.sectionMobile}>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {userMenu}
      <SignInCard open={loginPage} onClose={handleLoginPageClose} />
      <SwipeableDrawer
        anchor={"left"}
        open={drawerState}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <div>Meghanath</div>
      </SwipeableDrawer>
    </div>
  );
}
