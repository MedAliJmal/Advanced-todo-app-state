import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class AddTask extends Component {
  state = {
    inputText: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random(),
      tache: this.state.inputText,
      done: false,
    };
    // nesna3 function tajouti l object hedha li tableau li fil app.
    if (this.state.inputText.trim() !== "") {
      this.props.add(newTask);
      this.setState({ showEdit: false });
    } else alert("can't submit an empty value");
  };
  render() {
    return (
      <div className="addTask-cont">
        <h1 style={{ padding: "50px" }}>ONLINE TODO APP</h1>
        <Form
          className="mb-3"
          onSubmit={this.handleSubmit}
          style={{ width: "900px", display: "flex" }}
        >
          <Form.Control
            placeholder="Add your task"
            value={this.state.inputText}
            onChange={(e) => this.setState({ inputText: e.target.value })}
          />
          <Button variant="success" id="button-addon2" type="submit">
            Add
          </Button>
        </Form>
      </div>
    );
  }
}
