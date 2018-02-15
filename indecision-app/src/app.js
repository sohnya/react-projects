// Run babel with
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// Then do live-server public (while in the root of the project)

console.log("app.js is running!");

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer.",
    options: ['Opti1','Opti2']
};

// JSX - Javascript XML : A Javascript language extension.
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{(app.options && app.options.length > 0) ? app.options : "No options" }</p>
    </div>
);

let count = 0;
const addOne = () => {
    console.log('addOne')
};
const minusOne = () => console.log('minusOne');
const reset = () => console.log('reset');

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick = { addOne } >+1</button>
        <button onClick = { minusOne } >-1</button>
        <button onClick = { reset } >Reset</button>
    </div>
);

const appRoot = document.getElementById('app');

// We want to render the template in this element.
ReactDOM.render(templateTwo, appRoot);