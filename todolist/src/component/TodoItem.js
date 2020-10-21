import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h5>{title}</h5>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            EDIT
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            DEL
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
