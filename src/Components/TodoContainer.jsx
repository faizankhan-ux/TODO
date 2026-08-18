import React, { useContext } from "react";
import Task from "./Task";
import { TaskContext } from "../TaskContext";

const TodoContainer = () => {
 const { Tasks, setTask } = useContext(TaskContext);
 
  return (
    <div className="min-h-[80%] w-[90%] mx-auto pt-5">
      <h1 className="font-bold px-3 text-2xl sm:text-3xl md:text-4xl">Tasks</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-3">
        {Tasks.map((elem, idx) => {
          return <Task key={idx} todo={elem.todo} priority={elem.priority} deadLine={elem.deadLine}/>;
        })}
      </div>
    </div>
  );
};

export default TodoContainer;
