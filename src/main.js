// main.js
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, browserHistory } from "react-router";

import CommentBox from "./components/CommentBox";

import config from "./config";
const APIUrl = config[process.env.NODE_ENV].api;

export class Home extends React.Component {
  render() {
    return(
    <div>
      <h1>Home</h1>
      <h1><Link to={`/about`}>About</Link></h1>
      <h1><Link to={`/comments`}>Comments</Link></h1>
    </div>)
  }
}

export class About extends React.Component {
  render() {
    return(
    <div>
      <h1><Link to={`/`}>Home</Link></h1>
      <h1>About</h1>
      <h1><Link to={`/comments`}>Comments</Link></h1>
    </div>)
  }
}

export class Comments extends React.Component {
  render() {
    return(
    <div>
      <h1><Link to={`/`}>Home</Link></h1>
      <h1><Link to={`/about`}>About</Link></h1>
      <h1>Comments</h1>
      <div>
        <CommentBox url={APIUrl + "/comments"} pollInterval={10000} />
      </div>
    </div>)
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} / >
    <Route path="/comments" component={Comments} />
  </Router>),
  document.getElementById('content')
);
