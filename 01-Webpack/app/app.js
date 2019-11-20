// 
var _vanilla = document.getElementById("vanilla");

var _app = document.getElementById("app");

/**
* Use template strings to store basic html.
*/
var _template = `<p>Hello World!</p>`;
var _templateVanilla = `<p>Hello Vanilla JS!</p>`;

// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// This code renders a simple "Hello World".
// ReactDOM takes in two parameters (a single HTML div or element and the HTML target where it will be rendered)
// The code here will run through webpack and be compiled into plain JavaScript
// The compiled code will be appended into the index.html file in the id called "app"
ReactDOM.render(<p>Hello World!</p>, _app);

/**
 * Use Vanilla JS
 */
_vanilla.innerHTML = _templateVanilla;