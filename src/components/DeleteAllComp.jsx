import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";

export default class DeleteAllComp extends Component {
  state = {
    show: false,
  };

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  handleConfirm = () => {
    this.props.delAll();
    this.handleClose();
  };

  render() {
    return (
      <div>
        <Button variant="outline-danger" onClick={this.handleShow}>
          DELETE ALL
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>WARNING !!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete every task ???
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              No
            </Button>
            <Button variant="primary" onClick={this.handleConfirm}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
