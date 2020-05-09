import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Todo = props => {
    console.log(props);
    return (
        <div>
            <li>
                 <input type="checkbox"/>
                 <span>{props.todo.text} </span>
                 <button>Delete</button>
            </li>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {text:"something"},
                {text:"another example"},
                {text:"etc"},
            ],
        }
    }

    addTodo() {
        // TODO: replace this with a textbox not just a prompt
        const inputText = prompt("TODO text?");
        this.setState({todos: [...this.state.todos, {text:inputText}]});
    }

    render() {
        return (
            <div>
            <button onClick={() => this.addTodo()} />
            <ul>
                {this.state.todos.map(todo => (<Todo todo={todo}/>))}   {/* Maps over the entire array, one element at a time*/}
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
