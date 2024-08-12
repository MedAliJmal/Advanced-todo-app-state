import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";

export default class EditTask extends Component {
  el = this.props.el;
  state = {
    showEdit: false,
    inputValue: this.el.tache,
  };
  handleShow = () => this.setState({ showEdit: !this.state.showEdit });
  handleSubmit = (e) => {
    e.preventDefault();
    // create new task with the edited information
    const modifiedTask = {
      id: this.el.id,
      done: this.el.done,
      tache: this.state.inputValue,
    };
    if (this.state.inputValue.trim() !== "") {
      this.props.edit(modifiedTask);
      this.setState({ showEdit: false });
    } else alert("can't submit an empty value");
  };
  render() {
    return (
      <div>
        <Button
          style={{ margin: "5px", width: "100px" }}
          variant="outline-primary"
          onClick={() => this.handleShow()}
        >
          Edit
        </Button>
        {this.state.showEdit ? (
          <Form
            style={{ display: "flex" }}
            onSubmit={this.handleSubmit}
            className="mb-3"
          >
            <Form.Control
              placeholder="Edit current task"
              value={this.state.inputValue}
              onChange={(e) => this.setState({ inputValue: e.target.value })}
            />
            <Button
              variant="outline-secondary"
              type="submit"
              id="button-addon2"
            >
              Confirm
            </Button>
          </Form>
        ) : null}
      </div>
    );
  }
}
