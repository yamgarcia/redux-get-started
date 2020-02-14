import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Posts from "./components/Posts";
import Postform from "./components/Postform.js";
import Store from "./components/store";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

const store = createStore(() => [], {}, applyMiddleware); //a store must be created to be used on the Provider

function App() {
  return (
    <Provider
      store={store /* Store holds the whole state tree of an application */}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Postform />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
