import React from "react";
import styled from "styled-components";
import Login from "./Login/Login";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

class TopBar extends React.Component {
  constructor() {
    super();
    this.state = {
      showLogin: false
    };
  }

  onLoginClicked = () => {
    this.setState({ showLogin: !this.state.showLogin });
  };

  loginModal = () => {
    if (this.state.showLogin) {
      return <Login />;
    }
  };

  render() {
    return (
      <StyledTopBar>
        <StyledContainer>
          <StyledContainerLeft>
            <span>TOPICS</span>
            <span>SEARCH</span>
          </StyledContainerLeft>
          <StyledContainerCenter>
            <span>GENERAL</span>
            <span>BROWNBAG</span>
            <span>RANDOM</span>
            <span>MUSIC</span>
            <span>ANNOUNCEMENTS</span>
          </StyledContainerCenter>
          <StyledContainerRight>
            {this.loginModal()}
            <span onClick={this.onLoginClicked}>LOGIN</span>
          </StyledContainerRight>
        </StyledContainer>
      </StyledTopBar>
    );
  }
}

const StyledTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const StyledContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;

  span {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  }
`;

const StyledContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;

  span {
    cursor: pointer;
    margin-right: 5%;
  }

  span:last-child {
    margin-right: 0;
  }

  span:hover {
    text-decoration: underline;
  }
`;

const StyledContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;

  form {
    display: flex;
    margin-right: 32px;

    input {
      margin-right: 8px;
    }
  }

  span {
    cursor: pointer;
  }
`;

export default TopBar;
