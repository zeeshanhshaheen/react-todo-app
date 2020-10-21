import React, { Component } from "react";

class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Add new task"
              value={item}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-dark mt-3">
            {editItem ? "Edit Task" : "Add Task"}
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
