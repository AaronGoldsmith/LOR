import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";
import LoginCard from "../../components/LoginCard"
class EntryPoint extends Component {
  state = {
    loginSuccess: false,
    attempts: 0
  };
  componentDidMount() {
    // this.loadBooks();
  }

  render() {
    return (<div>
        <LoginCard  />
      </div>)
  
  }

}

export default EntryPoint

