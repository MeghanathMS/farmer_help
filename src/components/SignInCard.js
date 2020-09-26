import {
  Dialog,
  DialogTitle,
  IconButton,
  AppBar,
  Toolbar,
  Slide,
} from "@material-ui/core";
import React from "react";
import firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import FirebaseApp from "../FirebaseApp";
import { Close } from "@material-ui/icons";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function SignInCard(props) {
  const { onClose, open } = props;
  const uiConfig = {
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog fullWidth TransitionComponent={Transition} open={open}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <Close />
          </IconButton>
          <DialogTitle>Sign In</DialogTitle>
        </Toolbar>
      </AppBar>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={FirebaseApp.auth()}
      />
    </Dialog>
  );
}
