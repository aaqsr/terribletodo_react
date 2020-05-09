import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let id = 2; // 0, 1 reserved for example
// possible bug? eventually this number might overflow? since it doesn't get reset unless the page is refreshed. but that wont happen right
// right?


// How a todo item looks like:
const Todo = props => {
    console.log(props);
    return (
        <div>
            <li>
                 <input type="checkbox" checked={props.todo.checked} onClick={props.onToggle}/>     {/* todo is checked or not based on that props.todo.checked property */}
                 <span onClick={props.onToggle}>    {/* Let's user click on the text and still have it toggle */}
                    {props.todo.text}
                 </span>
                 <button onClick={props.onDelete} >Delete</button>
            </li>
        </div>
    )
}

// Main app class
class App extends React.Component {
    // No props passed
    constructor() {
        super();
        // store todos in state, comes with a few examples
        this.state = {
            todos: [{
                    id: 0,
                    text: "Click a TODO to toggle it",
                    checked: false,
                },
                {
                    id: 1,
                    text: "Click delete to delete that TODO",
                    checked: true,
                },
            ],
        }
    }

  // main render func of the app
    render() {
        return (
            <div>
                <span> Total TODOs: {this.state.todos.length} </span>
                <span> Unchecked TODOs: {this.numberToggledTodos()} </span>
                <p/> {/* Line break */}
                <button onClick={() => this.addTodo()}>Add TODO</button>
                <ul>
                    {this.state.todos.map(todo => ( <Todo todo={todo} onDelete={() => this.removeTodo(todo.id)} onToggle={() => this.toggleTodo(todo.id)}/> ) )}
                    {/* Takes each element in the array and passes it one by one with the name of "todo" as the prop of the Todo component. Also passes unique a function to delete that todo and one toggle that todo with that todos id. */}
                </ul>
            </div>
        )
    }

    // called when button is clicked to add todo item
    addTodo() {
        // TODO: replace this with a text box not just a prompt
        const inputText = prompt("TODO text?");
        // Updates state with a new array of all the todos plus a new one
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: id++,
                    text: inputText,
                    checked: false,
                }
            ]
        });
    }

    // passed with a unique id to every todos delete button. Updates state with array of all the todos with that one filtered out
    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter((todo) => (todo.id !== id))
        });
    }

    // passed with a unique id to every todo. Updates state with array of all the todos with that todos checked value flipped
    toggleTodo(id) {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (id !== todo.id) return todo;
                return {
                    id: todo.id,
                    text: todo.text,
                    checked: !todo.checked,
                }
            }),
        });
    }

    // returns the number of checked todos
    numberToggledTodos() {
        const uncheckedTodos = this.state.todos.filter(todo => todo.checked === false);
        return uncheckedTodos.length;
    }
  }

// Tells react to call the App component's renderer
ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById('root')
);
