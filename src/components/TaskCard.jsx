import React from "react";
import { Button, Card } from "react-bootstrap";
import EditTask from "./EditTask";

const TaskCard = ({ el, index, del, edit, comp }) => {
  return (
    <Card className="carta" style={{ width: "900px", margin: "15px" }}>
      <Card.Header>Task n° {index + 1}</Card.Header>
      <Card.Body>
        <Card.Title className={el.done ? "terminer" : "encours"}>
          {el.tache}
        </Card.Title>
        <Card.Text>
          This task is{" "}
          {el.done === true ? "already completed" : " not done yet"}
        </Card.Text>
        <Button
          onClick={() => comp(el.id)}
          style={{ margin: "5px", width: "100px" }}
          variant={el.done ? "primary" : "success"}
        >
          {el.done ? "Undo" : "Done"}
        </Button>
        <Button
          onClick={() => del(el.id)}
          style={{ margin: "5px", width: "100px" }}
          variant="danger"
        >
          Delete
        </Button>
        <EditTask edit={edit} el={el} />
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
