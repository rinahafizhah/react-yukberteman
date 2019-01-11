import React from "react";
import styled from "styled-components";

const Textarea = styled.textarea`
  border: 5px;
  border-radius: 25px;
`;

class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Post was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="example">
        <form onSubmit={this.handleSubmit}>
          <textarea
            placeholder="Whats happening?"
            value={this.state.value}
            onChange={this.handleChange}
            cols={40}
            rows={10}
          />
          <input type="submit" value="Tweet" />
        </form>
        <div className="preview">
          <h1>Preview Tweet</h1>
          <div>{this.state.value}</div>
        </div>
      </div>
    );
  }
}

export default TweetForm;
