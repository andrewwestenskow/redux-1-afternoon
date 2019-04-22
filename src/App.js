import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import routes from "./routes";
import "./reset.css";
import "./App.css";
import store from './store'

class App extends Component {

  state = {
    store: store.getState()
  }

  componentDidMount(){
    store.subscribe(()=>{
      this.setState({
        store: store.getState()
      })
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>Recipe Cards</h1>
          </header>
          {JSON.stringify(this.state.store)}
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
