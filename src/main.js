// main.js
import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import CommentBox from "./components/CommentBox";

import config from "./config";
const APIUrl = config[process.env.NODE_ENV].api;

ReactDOM.render(
  <CommentBox url={APIUrl + "/comments"} pollInterval={10000} />,
  document.getElementById('content')
);
