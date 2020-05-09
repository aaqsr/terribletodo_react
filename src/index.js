import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let id = 2; // 0, 1 reserved for example

const Todo = props => { // How a todo item looks like:
    console.log(props);
    return (
        <div>
            <li>
                 <input type="checkbox" checked={props.todo.checked} onClick={props.onToggle}/> {/* todo is checked or not based on that props.todo.checked property */}
                 <span>{props.todo.text} </span>
                 <button onClick={props.onDelete} >Delete</button>
            </li>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // declare state, comes with a few examples
            todos: [{
                    id: 0,
                    text: "something",
                    checked: false,
                },
                {
                    id: 1,
                    text: "another example",
                    checked: true,
                },
            ],
        }
    }

    addTodo() { // called when button is clicked to add todo item
        // TODO: replace this with a textbox not just a prompt
        const inputText = prompt("TODO text?");
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

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter((todo) => (todo.id !== id) )
        });
    }

    toggleTodo(id) {
        this.setState({
            todos: this.state.todos.map( (todo) => {
                if (id !== todo.id) return todo;
                return {
                    id: todo.id,
                    text: todo.text,
                    checked: !todo.checked,
                }
            }),
        });
    }

    numberToggledTodos() {
        const uncheckedTodos = this.state.todos.filter(todo => todo.checked === false);
        return uncheckedTodos.length;
    }

    render() {
        return ( // renders the app
            <div>
                <span> Total TODOs: {this.state.todos.length} </span>
                <span> Unchecked TODOs: {this.numberToggledTodos()} </span>
                <p/> {/* Line break */}
                <button onClick={() => this.addTodo()}>Add TODO</button>
                <ul>
                    {this.state.todos.map(todo => ( <Todo todo={todo} onDelete={() => this.removeTodo(todo.id)} onToggle={() => this.toggleTodo(todo.id)}/> ) )}
                    {/* Takes each element in the array and passes it one by one with the name of "todo" as the prop of the Todo component. Also passes unique functions to delete that todo or toggle that todo with that todo's id. */}
                </ul>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <App />
    </div>,
    document.getElementById('root')
);
