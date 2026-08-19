import React, { useState } from "react";
import Header from "./Components/Header";
import TodoContainer from "./Components/TodoContainer";
import AddButton from "./Components/AddButton";
import { themeContext } from "./ThemeContext";
import useToggle from "./Custom hooks/useToggle";
import { TaskContext } from "./TaskContext";
import Form from "./Components/Form";
import ClearPopUp from "./Components/ClearPopUp";

const App = () => {
  const [theme, toggleTheme] = useToggle("light");
  const [isFormActive, setIsFormActive] = useState(false);
  const [isClearActive, setisClearActive] = useState(false);

  const [Tasks, setTasks] = useState([
    {
      todo: "abcd1",
      priority: "high",
      deadline:"2026-10-12",
      done: false,
    },
    {
      todo: "abcd2",
      priority: "high",
      deadline: "2026-10-12",
      done: false,
    },
  ]);

  return (
    <TaskContext.Provider
      value={{ Tasks, setTasks, isFormActive, setIsFormActive ,isClearActive, setisClearActive}}
    >
      <div
        className={`h-screen w-full flex flex-col relative ${theme == "dark" && "bg-black"}  `}
      >
        <Header />
        <TodoContainer />
        <ClearPopUp />
        <Form />
        <AddButton />
      </div>
    </TaskContext.Provider>
  );
};

export default App;
