import React from "react";

const withAuthenticate = Content => {
  return class extends React.Component {
    constructor() {
      super();

      let isLoggedIn = false;
      let nameOfUser = "";

      if (localStorage.length >= 1) {
        for (let i = 0; i < localStorage.length; i++) {
          if (window.localStorage.getItem("username")) {
            isLoggedIn = true;
            nameOfUser = window.localStorage.getItem("username");
          }
        }
      }

      this.state = {
        username: nameOfUser ? nameOfUser : "",
        isLoggedIn: isLoggedIn ? isLoggedIn : false
      };
    }

    render() {
      if (!this.state.isLoggedIn) {
        return null;
      }
      return <Content />;
    }
  };
};

export default withAuthenticate;
