import React, { Component } from "react";
import TweetForm from "./TweetForm";
import Friends from "./Friends";

import styled from "styled-components";

const Title = styled.h1`
font-size: 20px;
font-weight: 700;
color: black;
`
const Application = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

class App extends Component {
  render() {
    return (
      <Application>
        <Title>Compose New Tweet</Title>
        <TweetForm />
        <Friends />
        
      </Application>
    );
  }
}

export default App;
