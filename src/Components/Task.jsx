import { CheckCheck, Trash } from "lucide-react";
import React, { useContext, useState } from "react";
import { TaskContext } from "../TaskContext";
import {motion} from "motion/react"

const Task = ({index, todo, priority, deadLine, done }) => {
  const { Tasks, setTasks } = useContext(TaskContext);
  let days = calculateDaysRemaining();
  const [doneStatus, setdoneStatus] = useState(done)


  function calculateDaysRemaining() {
    let currDate = new Date()
    return getDaysBetween(deadLine, currDate);
  }

  function getDaysBetween(date1, date2) {
    const oneDay = 1000 * 60 * 60 * 24; // Milliseconds in a day
    const diffInTime = new Date(date1) - new Date(date2);
    return Math.round(diffInTime / oneDay) + 1;
  }

  function taskDone(){
    console.log('clickedf')
    setdoneStatus(!doneStatus)
  }


  console.log(deadLine)
  function deleteTask(){

    let modifiedList = Tasks
    modifiedList = modifiedList.filter((elem , idx) => {
     return idx != index
    })
    setTasks(modifiedList)
    console.log('delete')
  }

  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className={`h-60 w-65 bg-white shadow-[0px_0px_5px_0.1px_black] m-5 rounded-2xl p-3 flex flex-col justify-between `}
    >
      <div className=" tetx-center flex flex-col items-center justify-baseline ">
        <div className="h-7 w-full flex items-center justify-between ">
          <div
            className={`bg-[#d4cbcb] ${priority == "high" && "bg-red-500"} ${priority == "medium" && "bg-amber-400"} ${priority == "low" && "bg-green-500"} text-white p-1 px-2 rounded-lg font-semibold`}
          >
            {priority}
          </div>

          <div className="flex w-[25%] gap-2 items-center justify-between  ">
            <CheckCheck
            onClick={taskDone}
            className="hover:text-green-400 cursor-pointer" />
            <Trash
              onClick={deleteTask}
              className="hover:text-red-500 cursor-pointer"
            />
          </div>
        </div>
        <div className={`font-semibold text-xl mt-3 ${doneStatus && 'line-through text-green-400'} `}>{todo}</div>
      </div>

      <div className="self-center text-[#888] text-sm">
        {days > 0 ? `${days} days remaining` : `${Math.abs(days)} day due`}
      </div>
    </motion.div>
  );
};

export default Task;
