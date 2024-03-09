import React, { Component } from "react";
import MoviePage from "./context/MoviePage";
import UserContext from "./context/userContext";
import Login from "./context/Login";

class App extends Component {
  state = { currentUser: { name: "" } };

  LoggedIn = (username) => {
    console.log("Getting the username: ", username);
    const user = { name: "Trushar" };
    this.setState({ currentUser: user });
  };
  render() {
    return (
      <UserContext.Provider
        value={{ currentUser: this.state.currentUser, onLogin: this.LoggedIn }}
      >
        <MoviePage />
        <Login />
      </UserContext.Provider>
    );
  }
}

export default App;
