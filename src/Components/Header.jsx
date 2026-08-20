import { Eraser, Moon, Search, Sun } from "lucide-react";
import React, { useContext, useState } from "react";
import { TaskContext } from "../TaskContext";
import { themeContext } from "../ThemeContext";

const Header = () => {
 

  const { theme, toggleTheme } = useContext(themeContext);
  const { setisClearActive } = useContext(TaskContext);

  function openClearAllpopup() {
    setisClearActive(true);
  }

  function handleTheme(){
    
    toggleTheme()
  }

  return (
    <div className="h-20 flex items-center justify-between p-10 border mt-10 mx-10 rounded-full">
      <div className="flex  items-center gap-2">
        <img
          src="https://images.unsplash.com/photo-1772371272152-d1806d4351e0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1hdGVkJTIwcHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D"
          alt="profile pic"
          className="h-15 aspect-square bg-cover rounded-full"
        />
        <h2 className="text-lg font-bold">Username</h2>
      </div>

      <div className="h-full w-1/3 bg-red-400 flex items-center justify-evenly *:hover:cursor-pointer">
        <div
        onClick={handleTheme}
        >
          {theme == "dark" ? (
            <Sun className=" hover:text-[lightseagreen]" />
          ) : (
            <Moon className=" hover:text-[lightseagreen]" />
          )}
        </div>
        <Eraser
          onClick={openClearAllpopup}
          className=" hover:text-[lightseagreen] hover:text-shadow-[0px_0px_30px] "
        />
      </div>
    </div>
  );
};

export default Header;
