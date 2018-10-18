import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";
import LoginCard from "../../components/LoginCard"
import IconList from "../../components/IconList"
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
        <IconList icons={[{name:"angry",tag:"pissed"},{name:"grimace",tag:'mischevious'},{name:"air-freshener",tag:"chill"}]}/>

      </div>)
  
  }

}

export default EntryPoint

