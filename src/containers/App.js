import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const classNames = require("classnames");
import Layout from "../components/header";
import Panel from "../components/Panel";
import { getProducts } from "../state/actions/";

class App extends React.Component {
  render() {
    const links = [
      { path: "/", title: "home", key: 1 },
      { path: "/checkout", title: "checkout", key: 2 }
    ];

    return (
      <Router>
        <main >
          <Layout links={links} />
            <Switch>
              <Route exact path="/" component={Panel} />
            </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
