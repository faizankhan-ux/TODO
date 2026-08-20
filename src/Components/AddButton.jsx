import { CirclePlus } from "lucide-react";
import { useContext } from "react";
import { themeContext } from "../ThemeContext";
import { TaskContext } from "../TaskContext";

const AddButton = () => {
  const{ theme }= useContext(themeContext);
  const isDark = theme === "dark";

  const { setIsFormActive } = useContext(TaskContext);
  
  function HandleClick() {
    setIsFormActive(true);
  }

  return (
    <div
      onClick={HandleClick}
      className={`h-13 flex items-center gap-2 rounded-full border p-2 text-xl fixed bottom-10 left-4 cursor-pointer hover:opacity-80 ${isDark ? "bg-black text-white" : "bg-white text-black"} `}
    >
      <CirclePlus
        size={35}
        className={`rounded-full ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
      />
      <h2
        className={` mr-2  ${isDark ? "bg-black text-white" : "bg-white text-black"} `}
      >
        Add New Task
      </h2>
    </div>
  );
};

export default AddButton;
