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
  Fab,
  Zoom,
  useTheme,
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SignInCard from "./SignInCard";
import {
  AccountCircle,
  Add,
  ExitToApp,
  Message,
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
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function HomeAppBar(props) {
  const theme = useTheme();
  const user = FirebaseApp.auth().currentUser;
  const [messageCount, setMessageCount] = React.useState(0);
  const [notificationCount, setNotificationCoutn] = React.useState(0);
  const [loginPage, setLoginPage] = React.useState(false);
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
  const [userMenuAnchor, setUserMenuAnchor] = React.useState(null);
  const isUserMenuOpen = Boolean(userMenuAnchor);
  const userMenuId = "user-menu";
  const handleUserMenuOpen = (event) => {
    setUserMenuAnchor(event.currentTarget);
  };
  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
    handleMobileMenuClose();
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
  const [mobileMenuAnchor, setMobileMenuAnchor] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMenuAnchor);
  const mobileMenuId = "mobile-menu";
  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };
  const mobileMenu = (
    <>
      <Menu
        anchorEl={mobileMenuAnchor}
        id={mobileMenuId}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        {user == null && <MenuItem>Sign In</MenuItem>}
        {user != null && (
          <div>
            <MenuItem onClick={handleMobileMenuClose}>
              <IconButton>
                <Badge badgeContent={messageCount}>
                  <Message />
                </Badge>
              </IconButton>
              Messages
            </MenuItem>
            <MenuItem onClick={handleMobileMenuClose}>
              <IconButton>
                <Badge badgeContent={notificationCount}>
                  <Notifications />
                </Badge>
              </IconButton>
              Notifications
            </MenuItem>
            <MenuItem
              edge="end"
              aria-label="account of current user"
              aria-controls={userMenuId}
              aria-haspopup="true"
              color="inherit"
              onClick={handleUserMenuOpen}
            >
              <IconButton>
                <Avatar src={user.photoURL} />
              </IconButton>
              My Profile
            </MenuItem>
          </div>
        )}
      </Menu>
    </>
  );
  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

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
                <Badge badgeContent={messageCount}>
                  <Message />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={notificationCount}>
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
            <IconButton
              edge="end"
              aria-label="mobile menu"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              color="inherit"
              onClick={handleMobileMenuOpen}
            >
              <MoreVert />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {userMenu}
      {mobileMenu}
      <Zoom
        key={"primary"}
        in={true}
        timeout={transitionDuration}
        style={{
          transitionDelay: `${transitionDuration.exit}ms`,
        }}
        unmountOnExit
      >
        <Fab className={classes.fab}>
          <Add />
        </Fab>
      </Zoom>

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
