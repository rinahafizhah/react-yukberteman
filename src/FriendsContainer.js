import React, { Component } from "react";

class FriendsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Rina Hafizhah Utami",
      friends: ["Dheta", "Kak Manda", "Pak Gatot"]
    };

    this.addFriend = this.addFriend.bind(this);
  }
  addFriend(friend) {
    this.setState(state => ({
      friends: state.friends.concat([friend])
    }));
  }
  render() {
    return (
      <div>
        <h3> Name: {this.state.name} </h3>
        <AddFriend addNew={this.addFriend} />
        <ShowList names={this.state.friends} />
      </div>
    );
  }
}

export default FriendsContainer;
