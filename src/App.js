import React, { Component } from "react";
import "./App.css";

import WelcomeComponent from './WelcomeComponent';
import User from './User';
import FancyBorder from './FancyBorder';

// import the npm package (which is a component)
import ReactPlayer from "react-player";


const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  avatarUrl: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-128.png'
};

// React class Component
class App extends Component {

  render() {
    return (
      <div className="App">
        <WelcomeComponent cityName="Barcelona" />    {/* class component */}
        
        <FancyBorder>
          <h1>Welcome To the fancy box</h1>
          <p>Thank you for cisiting ou spacecraft!</p>
        </FancyBorder>
        
        <User username={user.firstName} />    {/* function component */}
        <User username='Sarah' />
        <User username='John' />
        <User username='Anna' />

        {/* our Vimeo video */}
        <ReactPlayer url="https://vimeo.com/channels/top/22439234" />
      </div>
    );
  }
}

export default App;