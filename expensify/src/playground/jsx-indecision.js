// Run babel with
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// Then do live-server public (while in the root of the project)

console.log("app.js is running!");

const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer.",
    options: []
};

// Will be called in event object
const onFormSubmit = (e) => {
    e.preventDefault(); // Why is this used? It stops options
    // from going into the URL - No full refresh of the page. 
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option); // What does this do? Push onto array
        e.target.elements.option.value = ''; // Clear input
        render();
    }
}

const onRemoveAll = () => {
        app.options = [];
        render();
};

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNumber];
    alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.options && app.options.length > 0) ? "Here are your options:" : "No options"}</p>
            <button disabled={app.options.length==0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                   app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render(); // Render initial applications