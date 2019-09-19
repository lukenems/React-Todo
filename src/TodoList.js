import React from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import EditTodoForm from './EditTodoForm';
import uuid from 'uuid/v4';


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
  }

  addTodo(todo) {
    let newTodo = { ...todo, id: uuid(), editForm: false };
    this.setState( st => ({
      todos: [...st.todos, newTodo]
    }));
  }

  removeTodo(todoId) {
    this.setState( st => ({
      todos: st.todos.filter( todo => todo.id !== todoId)
    }));
  }

  updateTodo(todoId, newValue) {
    console.log(todoId, newValue)
    this.setState( st => ({
      todos: st.todos.map( todo => (
        todo.id === todoId 
          ? { ...todo, task: newValue}
          : todo
      ))})
    );
  }

  showEditForm(formId) {
    this.setState( st => ({
      todos: st.todos.map( todo => (
        todo.id === formId
          ? {...todo, editForm: !todo.editForm }
          : todo
      ))
    }))
  }

  renderTodoList() {
    return (
      <ul>
        {this.state.todos.map(todo => (
          <React.Fragment key={uuid()}>

          <Todo key={todo.id} id={todo.id}
            task={todo.task}
            removeTodo={this.removeTodo} showEditForm={this.showEditForm}/>

          {todo.editForm 
          ? <EditTodoForm  key={uuid()} formId={todo.id} 
          value={todo.task} 
          updateTodo={this.updateTodo} display={todo.editForm}/> 
          : null }

          </React.Fragment>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <NewTodoForm addTodo={this.addTodo} />
        {this.renderTodoList()}
      </div>
    )
  }
}

export default TodoList