import React, { Component } from "react";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    // console.log(newItem);
    const updatedItem = [...this.state.items, newItem];
    this.setState({
      items: updatedItem,
      item: "",
      id: uuid(),
      editItem: false,
    });
  };
  clearList = () => {
    this.setState({
      items: [],
    });
  };

  handleDelete = (id) => {
    const getID = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items: getID,
    });
  };

  handleEdit = (id) => {
    const getID = this.state.items.filter((item) => item.id !== id);
    const selectedItem = this.state.items.find((item) => item.id === id);
    console.log(selectedItem);

    this.setState({
      items: getID,
      item: selectedItem.title,
      editItem: true,
      id: id
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo List App</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
