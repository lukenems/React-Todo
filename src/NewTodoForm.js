import React from 'react';

class NewTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: "" }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ task: "" });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name ]: evt.target.value })
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label htmlFor="task">Task:</label>
      <input id="task" name="task" value={this.state.task} onChange={this.handleChange}></input>
      <button>Add a Task</button>
    </form>
    )
  }
}

export default NewTodoForm