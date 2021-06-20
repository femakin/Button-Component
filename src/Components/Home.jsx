import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import BTN from "./BTN";
import HomePage from "./ErrorPage";
import InputCom from "./InputCom";

export default function Home() {
  return (
    <Router>
      <div className="full">
        <div className="left_content">
          <div className="mx_auto">
            <h1 className="left_content_title">
              <span>Dev</span>challenges.io
            </h1>
            <ul>
              <li>
                {" "}
                <Link to="/colors">Colors</Link>
              </li>
              <li>
                <Link to="/typography">Typography</Link>
              </li>
              <li>
                {" "}
                <Link to="/spaces">Spaces</Link>
              </li>
              <li>
                <Link to="/button">Buttons</Link>
              </li>
              <li>
                <Link to="/input">
                  {" "}
                  <a href="/" className="nav_input">
                    Input
                  </a>
                </Link>
              </li>
              <li>
                {" "}
                <Link to="/grid">Grid</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right_content">
          <Route exact path="/">
            <InputCom />
          </Route>
          <Redirect from="/" to="/input" />
          <Switch>
            <Route exact path="/button">
              <BTN />
            </Route>

            <Route exact path="/input">
              <InputCom />
            </Route>
            <Route path="*">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
