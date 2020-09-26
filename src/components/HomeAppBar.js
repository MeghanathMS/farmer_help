import {
  AppBar,
  IconButton,
  SwipeableDrawer,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SignInCard from "./SignInCard";

export default function HomeAppBar(props) {
  const [user, setUser] = React.useState(props.user);
  const [loginPage, setLoginPage] = React.useState(false);
  const handleLoginPageClose = () => {
    setLoginPage(false);
  };
  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SignInCard open={loginPage} onClose={handleLoginPageClose} />
      <SwipeableDrawer open={true}></SwipeableDrawer>
      <div></div>
    </div>
  );
}
