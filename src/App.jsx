import React, { Component } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { Button, Form } from "react-bootstrap";
import DeleteAllComp from "./components/DeleteAllComp";

export default class App extends Component {
  state = {
    filterOption: "All",
    tasksTable: [
      {
        id: Math.random(),
        tache: "Learn HTML",
        done: true,
      },
      {
        id: Math.random(),
        tache: "Learn CSS",
        done: true,
      },
      {
        id: Math.random(),
        tache: "Learn REDUX",
        done: false,
      },
    ],
  };

  handleEdit = (editedTask) => {
    this.setState({
      tasksTable: this.state.tasksTable.map((el) =>
        el.id === editedTask.id ? editedTask : el
      ),
    });
  };

  handleDelete = (ClickedID) => {
    this.setState({
      tasksTable: this.state.tasksTable.filter((el) => el.id !== ClickedID),
    });
  };

  handleComplete = (ClickedID) => {
    this.setState({
      tasksTable: this.state.tasksTable.map((el) =>
        el.id === ClickedID ? { ...el, done: !el.done } : el
      ),
    });
  };

  handleAdd = (noveauTache) => {
    this.setState({ tasksTable: [...this.state.tasksTable, noveauTache] });
  };
  handleDeleteAll = () => this.setState({ tasksTable: [] });
  render() {
    return (
      <div className="App">
        <AddTask add={this.handleAdd} />
        <DeleteAllComp delAll={this.handleDeleteAll} />
        <Form.Select
          style={{ width: "150px", margin: "25px" }}
          onChange={(e) => this.setState({ filterOption: e.target.value })}
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Uncompleted">Uncompleted</option>
        </Form.Select>
        <TaskList
          filt={this.state.filterOption}
          edit={this.handleEdit}
          del={this.handleDelete}
          comp={this.handleComplete}
          tasks={this.state.tasksTable}
        />
      </div>
    );
  }
}
