import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import withAuthenticate from "./authentication/withAuthenticate";

const ComponentFromWithAuthenticate = withAuthenticate(Content);


const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <ComponentFromWithAuthenticate />
    </div>
  );
}

export default App;
