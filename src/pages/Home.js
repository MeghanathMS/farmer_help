import React from "react";
import HomeAppBar from "../components/HomeAppBar";
import FirebaseApp from "../FirebaseApp";

class Home extends React.Component {
  state = {
    user: FirebaseApp.auth().currentUser,
  };
  componentDidMount = () => {
    FirebaseApp.auth().onAuthStateChanged((userAuth) => {
      this.setState({ user: userAuth });
    });
  };
  render() {
    return (
      <div>
        <HomeAppBar user={this.state.user} />
      </div>
    );
  }
}

export default Home;
