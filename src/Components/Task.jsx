import { CheckCheck, Trash } from "lucide-react";
import React, { useContext } from "react";
import { TaskContext } from "../TaskContext";

const Task = ({ todo, priority, deadLine }) => {
  function calculateDaysRemaining() {
    return getDaysBetween("2026-01-2", "2026-01-1");
  }
  let days = calculateDaysRemaining();

  function getDaysBetween(date1, date2) {
    const oneDay = 1000 * 60 * 60 * 24; // Milliseconds in a day
    const diffInTime = new Date(date2) - new Date(date1);
    return Math.round(diffInTime / oneDay);
  }

  return (
    <div className="h-60 w-65 bg-[#dadada] m-5 rounded-2xl p-3 flex flex-col justify-between ">
      <div className=" tetx-center flex flex-col items-center justify-baseline">
        <div className="h-7 w-full flex items-center justify-between ">
          <div className="bg-[#d4cbcb] text-red-600 p-1 px-2 rounded-lg font-semibold">
            {priority}
          </div>

          <div className="flex w-[25%] gap-2 items-center justify-between  ">
            <CheckCheck className="hover:text-green-400 cursor-pointer" />
            <Trash className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>
        <div className="font-semibold text-xl mt-3">{todo}</div>
      </div>

      <div className="self-center text-[#888] text-sm">
        {days > 0 ?  `${days} days remaining` : `${Math.abs(days)} day due`}
      </div>
    </div>
  );
};

export default Task;
