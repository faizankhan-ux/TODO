import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import TodoContainer from "./Components/TodoContainer";
import AddButton from "./Components/AddButton";
import { themeContext } from "./ThemeContext";
import useToggle from "./Custom hooks/useToggle";
import { TaskContext } from "./TaskContext";
import Form from "./Components/Form";
import ClearPopUp from "./Components/ClearPopUp";

const App = () => {
  const [theme, toggleTheme , updatTheme] = useToggle("light");
  const [isFormActive, setIsFormActive] = useState(false);
  const [isClearActive, setisClearActive] = useState(false);



  const [Tasks, setTasks] = useState([
   
  ]);


  //SAVE TO LOCAL STORAGE
  function saveToLocalStorage(){
    localStorage.clear()
    let CurrTasks = Tasks;
    let CurrTheme = theme;

    let data = {
      Tasks : CurrTasks,
      theme : CurrTheme
    }
    
    localStorage.setItem("TodoData" , JSON.stringify(data))
  }

  function loadFromLocalStorage(){
    let obj = JSON.parse(localStorage.getItem("TodoData"))
    if(obj == null) return

    let {Tasks , theme} = obj;
    
   

    updatTheme(theme)
    setTasks(Tasks)
    
  }

  useEffect(loadFromLocalStorage ,[])


  useEffect(saveToLocalStorage , [Tasks , theme])

  return (
    <themeContext.Provider value={{theme,toggleTheme}}>
      <TaskContext.Provider
        value={{
          Tasks,
          setTasks,
          isFormActive,
          setIsFormActive,
          isClearActive,
          setisClearActive,
        }}
      >
        <div
          className={`h-screen w-full flex flex-col relative ${theme == "dark" && "bg-[#222] text-white"}  `}
        >
          <Header />
          <TodoContainer />
          <ClearPopUp />
          <Form />
          <AddButton />

          
        </div>
      </TaskContext.Provider>
    </themeContext.Provider>
  );
};

export default App;
