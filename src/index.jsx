import React from "react";
import ReactDOM from "react-dom";

import TodoApp from "TodoApp";


require("style!css!foundation-sites/dist/css/foundation.min.css");
require("style!css!sass!styles/app.scss");



ReactDOM.render(<TodoApp />, document.getElementById("root"));
