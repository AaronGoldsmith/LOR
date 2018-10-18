import React, { Component } from 'react';
import Container from "./components/Container"
import LoginCard from "./components/LoginCard"
import EntryPoint from "./pages/Entrypoint/Entrypoint"
import {FormBtn, Input, TextArea as Form} from "./components/Form/"
import { BrowserRouter as Router } from "react-router-dom";

import './App.css';

class App extends Component {
  state = {
    page: "",
    isAuthenticated: false
  }
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
                <EntryPoint />
                {/* <LoginCard /> */}

          </header>
        </div>
      <Router>

      </Router>
      </div>
    );
  }
}

export default App;
