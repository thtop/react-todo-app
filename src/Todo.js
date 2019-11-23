import React from "react";
import "./Todo.css";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { task: this.props.task, isEditing: false };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToggleForm = this.handleToggleForm.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  }

  handleToggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleToggle() {
    this.props.toggleTodo(this.props.id);
  }

  render() {
    let result;

    if (this.state.isEditing) {
      result = (
        <form onSubmit={this.handleUpdate}>
          <input
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          <button onClick={this.handleUpdate}>Save</button>
          <button>Cancel</button>
        </form>
      );
    } else {
      result = (
        <div>
          <li
            className={this.props.completed ? "completion" : ""}
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <button onClick={this.handleToggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <hr />
        </div>
      );
    }
    return result;
  }
}

export default Todo;
