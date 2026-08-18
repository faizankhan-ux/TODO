import React, { useState } from "react";
import Header from "./Components/Header";
import TodoContainer from "./Components/TodoContainer";
import AddButton from "./Components/AddButton";
import { themeContext } from "./ThemeContext";
import useToggle from "./Custom hooks/useToggle";
import { TaskContext } from "./TaskContext";

const App = () => {
  const [theme, toggleTheme] = useToggle("light");
  const [Tasks, setTasks] = useState([
    {
      todo: "Do Binary Trees Questions",
      priority: "high",
      deadLine: new Date(2026, 8, 1),
    },
  ]);

  return (
    <div
      className={`h-screen w-full flex flex-col relative ${theme == "dark" && "bg-black"}`}
    >
      <TaskContext.Provider value={{ Tasks, setTasks }}>
        <themeContext.Provider value={{ theme, toggleTheme }}>
          <Header />
          <TodoContainer />
          <AddButton />
        </themeContext.Provider>
      </TaskContext.Provider>
    </div>
  );
};

export default App;
