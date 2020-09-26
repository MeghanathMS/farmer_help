import { Fab, makeStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";
import HomeAppBar from "../components/HomeAppBar";
import FirebaseApp from "../FirebaseApp";

class Home extends React.Component {
  classes = makeStyles((theme) => ({
    fab: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));
  state = {
    user: FirebaseApp.auth().currentUser,
  };
  componentDidMount = () => {
    FirebaseApp.auth().onAuthStateChanged((userAuth) => {
      this.setState({ user: userAuth });
    });
  };
  // style = {
  //   margin: 0,
  //   top: "auto",
  //   right: 30,
  //   bottom: 30,
  //   left: "auto",
  //   position: "fixed",
  // };
  render() {
    return (
      <div>
        <HomeAppBar />
        {/* <Fab color="primary" aria-label="add" style={this.style}>
          <Add />
        </Fab> */}
      </div>
    );
  }
}

export default Home;
