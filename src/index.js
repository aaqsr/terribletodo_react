import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let id = 2; // 0, 1 reserved for example


// How a todo item looks like:
const Todo = props => {
    // console.log(props);  // For debugging purposes
    return (
        <div class="todoItem">
            <li>
                 <input type="checkbox" checked={props.todo.checked} onClick={props.onToggle}/>     {/* todo is checked or not based on that props.todo.checked property */}
                 <span onClick={props.onToggle}>    {/* Let's user click on the text and still have it toggle */}
                    {props.todo.text}
                 </span>
                 <span class="delButton">
                    <button onClick={props.onDelete} >Delete</button>
                 </span>
            </li>
            <p/>
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
                    text: "click a todo to toggle it",
                    checked: false,
                },
                {
                    id: 1,
                    text: "click delete to delete that todo",
                    checked: true,
                },
            ],
        }
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    // main render func of the app
    render() {
        return (
            <div id="app">
                <div id="counters">
                    <span> total: {this.state.todos.length} </span>
                    <span> left: {this.numberToggledTodos()} </span>
                </div>
                <p/> {/* Line break */}
                <div id="inputBox">
                    <input type="text" onKeyUp={this.handleKeyUp} placeholder="i have to..."/>
                </div>
                <ul>
                    {this.state.todos.map(todo => ( <Todo todo={todo} onDelete={() => this.removeTodo(todo.id)} onToggle={() => this.toggleTodo(todo.id)}/> ) )}
                    {/* Takes each element in the array and passes it one by one with the name of "todo" as the prop of the Todo component. Also passes unique a function to delete that todo and one toggle that todo with that todos id. */}
                </ul>
            </div>
        )
    }

    // called when button is clicked to add todo item
    addTodo(inputText) {
        // TODO: replace this with a text box not just a prompt
        // const inputText = prompt("TODO text?");
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

    // Handles key press in the input box
    handleKeyUp(e) {
        if (e.keyCode === 13) {
            if (e.target.value.trim() === '') {
                alert("Please enter something first :)")
            } else {
                this.addTodo(e.target.value.trim());
                e.target.value = '';
            }
        }
    }
}

// Tells react to call the App component's renderer at root element
ReactDOM.render(
    <div>
        <h1>todo</h1>
        <App />
    </div>,
    document.getElementById('root')
);
