import React from "react";
import TaskCard from "./TaskCard";

const TaskList = ({ tasks, del, edit, comp, filt }) => {
  //   console.log(tasks);
  return (
    <div className="cards-container">
      {/* map tableau aala kol element esna3 carte w khoudh les info mte3ha */}
      {filt === "All"
        ? tasks.map((el, index) => (
            <TaskCard
              edit={edit}
              del={del}
              el={el}
              key={el.id}
              index={index}
              comp={comp}
            />
          ))
        : filt === "Uncompleted"
        ? tasks
            .filter((el) => el.done === false)
            .map((el, index) => (
              <TaskCard
                edit={edit}
                del={del}
                el={el}
                key={el.id}
                index={index}
                comp={comp}
              />
            ))
        : tasks
            .filter((el) => el.done === true)
            .map((el, index) => (
              <TaskCard
                edit={edit}
                del={del}
                el={el}
                key={el.id}
                index={index}
                comp={comp}
              />
            ))}
    </div>
  );
};

export default TaskList;
