import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Todo = props => { // How a todo item looks like:
    console.log(props);
    return (
        <div>
            <li>
                 <input type="checkbox"/>
                 <span>{props.todo.text} </span>
                 <button onClick={props.onDelete} >Delete</button>
            </li>
        </div>
    )
}

let id = 2; // 0, 1 reserved for example

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { // declare state, comes with a few examples
            todos: [{
                    id: 0,
                    text: "something"
                },
                {
                    id: 1,
                    text: "another example"
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
                    text: inputText
                }
            ]
        });
    }

    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter((todo) => (todo.id !== id) )
        });
    }

    render() {
        return ( // renders the app
            <div>
                <span>Total TODOs: {this.state.todos.length}</span>
                <p/> {/* Line break */}
                <button onClick={() => this.addTodo()}>Add TODO</button>
                <ul>
                    {this.state.todos.map(todo => ( <Todo todo={todo} onDelete={() => this.removeTodo(todo.id)} /> ) )}
                    {/* Takes each element in the array and passes it one by one with the name of "todo" as the prop of the Todo component. Also passes a unique function to delete that todo with that todo's id. */}
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
