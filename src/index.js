import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

 // <input type="checkbox" />
 //                <span>{}</span>
 //                <span><button>delete</button></span>

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
    constructor (props) {
        super(props);
        this.state = {
            todos: ["something", "another example", "etc"],
        }
    }
    render () {
        return (
            <ul>
                {this.state.todos.map(todo => (<Todo todo={todo}/>))}
            </ul>
        )
   }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
