import React from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  create(newTodo) {
    if (!newTodo.task) {
      alert("Please enter a todo.");
    } else {
      this.setState({ todos: [...this.state.todos, newTodo] });
    }
  }

  remove(id) {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  }

  update(id, updateTask) {
    const updatedTodp = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updateTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodp });
  }

  toggleTodo(id) {
    const updatedTodo = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodo });
  }

  renderList() {
    return this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        removeTodo={this.remove}
        updateTodo={this.update}
        toggleTodo={this.toggleTodo}
      />
    ));
  }

  render() {
    return (
      <div>
        <TodoForm createTodo={this.create} />
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

export default TodoList;
