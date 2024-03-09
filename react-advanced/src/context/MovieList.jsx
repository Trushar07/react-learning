import React, { Component } from "react";
import UserContext from "./userContext";
import MovieRow from "./MovieRow";

class MovieList extends Component {
  static contextType = UserContext;

  /* In JavaScript, a static property is a property that belongs to a class itself rather 
  than its instances. This means that the property can be accessed directly from the class 
  without having to create an object instance of the class first.*/

  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            Movie List
            {userContext.currentUser ? userContext.currentUser.name : ""}
            <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
