"use strict";

// Run babel with
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// Then do live-server public (while in the root of the project)

console.log("app.js is running!");

var app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer.",
    options: ['Opti1', 'Opti2']
};

// JSX - Javascript XML : A Javascript language extension.
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options && app.options.length > 0 ? app.options : "No options"
    )
);

var count = 0;
var addOne = function addOne() {
    console.log('addOne');
};
var minusOne = function minusOne() {
    return console.log('minusOne');
};
var reset = function reset() {
    return console.log('reset');
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count: ",
        count
    ),
    React.createElement(
        "button",
        { onClick: addOne },
        "+1"
    ),
    React.createElement(
        "button",
        { onClick: minusOne },
        "-1"
    ),
    React.createElement(
        "button",
        { onClick: reset },
        "Reset"
    )
);

var appRoot = document.getElementById('app');

// We want to render the template in this element.
ReactDOM.render(templateTwo, appRoot);
