import { CirclePlus } from "lucide-react";
import React, { useContext, useState } from "react";
import { themeContext } from "../ThemeContext";
import { TaskContext } from "../TaskContext";

const AddButton = () => {
  let theme = useContext(themeContext);

  const {  setIsFormActive } = useContext(TaskContext);

 
  function HandleClick() {
    setIsFormActive(true);
  }

  return (
    <div
      onClick={HandleClick}
      className="h-13  text-xl bg-black text-white  flex p-2  rounded-full  gap-2 cursor-pointer border items-center fixed left-4 bottom-10  hover:opacity-80"
    >
      <CirclePlus
        size={35}
        onMouseEnter={() => {
          setExpand(true);
        }}
        onMouseLeave={() => setExpand(false)}
        className="rounded-full  bg-white text-black "
      />
      <h2 className="mr-2 ">Add New Task</h2>
    </div>
  );
};

export default AddButton;
