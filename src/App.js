import React, { Component } from "react";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      currentTask: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleInputChange(event) {
    this.setState({ currentTask: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const tasks = [
      ...this.state.tasks,
      { taskName: this.state.currentTask, completed: false },
    ];
    this.setState({ tasks: tasks, currentTask: "" });
  }

  handleComplete(index) {
    const tasks = [...this.state.tasks];
    tasks[index].completed = !tasks[index].completed;
    this.setState({ tasks: tasks });
  }

  handleDelete(index) {
    const tasks = [...this.state.tasks];
    tasks.splice(index, 1);
    this.setState({ tasks: tasks });
  }

  render() {
    return (
      <div>
        <h1>To-do List</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.currentTask}
            onChange={this.handleInputChange}
          />
          <button type="submit">Agregar tarea</button>
        </form>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
                onClick={() => this.handleComplete(index)}
              >
                {task.taskName}
              </span>
              <button onClick={() => this.handleDelete(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
