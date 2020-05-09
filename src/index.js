import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Todo = props => {
    console.log(props);
    return (
        <div>
            <li>
                 <input type="checkbox"/>
                 <span>{props.todo} </span>
                 <button>Delete</button>
            </li>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ["something", "another example", "etc"],
        }
    }

    addTodo() {
        // TODO: replace this with a textbox not just a prompt
        const text = prompt("TODO text?");
        this.setState({todos: [...this.state.todos, text]});
    }

    render() {
        return (
            <div>
            <button onClick={() => this.addTodo()} />
            <ul>
                {this.state.todos.map(todo => (<Todo todo={todo}/>))}
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
