import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <li>
        {this.props.task}
        <button onClick={(evt => this.props.removeTodo(this.props.id, evt))}>x</button>
        <button onClick={(evt => this.props.showEditForm(this.props.id, evt))}>Edit</button>
      </li>
    )
  } 
}

export default Todo