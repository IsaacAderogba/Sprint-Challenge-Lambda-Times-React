import React from "react";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  onLogin = () => {
    localStorage.setItem("username", this.state.username);
    window.location.reload();
    console.log('here');
  };

  usernameInputHandler = input => {
    this.setState({ username: input.target.value });
  };

  passwordInputHandler = input => {
    this.setState({ password: input.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onLogin}>
        <input
          required
          placeholder="username"
          onChange={this.usernameInputHandler}
          value={this.state.username}
        />
        <input
          required
          type="password"
          placeholder="password"
          onChange={this.passwordInputHandler}
          value={this.state.password}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default Login;
