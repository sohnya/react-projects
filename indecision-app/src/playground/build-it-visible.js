// Create a component VisibilityToggle
// render() 
// constructor() - bind buttonClick
// handleToggleVisibility
// State: visibility, default false.

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() { 
        this.setState( (prevState) => {
            return {
                visibility : !prevState.visibility
            }
        });
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.handleToggleVisibility}>
                    {this.state.visibility ? "Hide details" : "Show details"}
                </button>
                {this.state.visibility && <p>Visible or not?</p>}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))


// console.log("Visibility toggle is running")

// const app = {
//     title : "Visibility toggle",
    // details : "This is details",
// }

// let visibility = false;

// const onShowDetails = () => {
//     console.log("Clickin'....");
//     visibility = !visibility;
//     render();
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//     const jsx = (
//     <div>
//         <h1>{app.title}</h1>
//         <button onClick={onShowDetails}>{visibility ? "Hide details" : "Show details"}</button>
//         {visibility && <p>{app.details}</p>}
//     </div>
//     )
//     ReactDOM.render(jsx,appRoot);
// };

// render();
