import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

 // <input type="checkbox" />
 //                <span>{}</span>
 //                <span><button>delete</button></span>



class Todo extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            todos: ["something", "another example", "etc"],
        }
    }
    render () {
        return (
            <ul>
                {this.state.todos.map((arr) => ( <li>{arr}</li> ))}
            </ul>
        )
   }
}

ReactDOM.render(
    <Todo />,
  document.getElementById('root')
);
