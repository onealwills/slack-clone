import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />

          <Switch>
            <Route path="/room/:roomId">
              <h2></h2>
              <Chat />
            </Route>
            <Route path="/">
              <h1>welcome</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
