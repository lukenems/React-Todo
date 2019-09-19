import React from 'react';

class EditTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editTask: this.props.value, isHidden: this.props.display }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.formId, this.state.editTask);

  }

  handleChange(evt) {
    console.log("a change")
    this.setState({ [evt.target.name ]: evt.target.value })
  }
  render() {
    return (
      <form style={{ display: this.state.isHidden }} onSubmit={this.handleSubmit}>
        <label htmlFor="editTask">Edit Task</label>
        <input name="editTask" value={this.state.editTask} onChange={this.handleChange} />
        <button>Save</button>
      </form>
    )
  }
}

export default EditTodoForm