import React, { Component } from "react";
import TweetForm from "./TweetForm";
import Friends from "./Friends";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Compose New Tweet</h1>
        <TweetForm />
        <Friends />
      </div>
    );
  }
}

export default App;
