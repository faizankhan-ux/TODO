import React, { useContext, useRef } from "react";
import { TaskContext } from "../TaskContext";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

function Form() {
  const { isFormActive, setIsFormActive, Tasks,setTasks } = useContext(TaskContext);
  let todoRef = useRef();
  let priorityRef = useRef();
  let dateRef = useRef();

  function closeForm() {
    setIsFormActive(false);
  }

  function validation(task,priority,date) {
    console.log(typeof task)
    if (task.trim("") == "" || priority == "" || date == "") {
      return false;
    }
    return true;
  }

  function handleSubmit() {
    let task = todoRef.current.value;
    let priority = priorityRef.current.value;
    let date = dateRef.current.value;

    if (validation(task,priority,date) == false) {
      alert("Fill the required information");
      return
    }
    let newTask = {
      todo: task,
      priority: priority,
      deadLine: date,
      done: false,
    };
    
    let newList = Tasks
    newList.push(newTask)

    setTasks(newList);

    closeForm();
  }

  return (
    <AnimatePresence>
      {isFormActive && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="h-screen w-full absolute backdrop-blur-[5px]"
        >
          <div className="absolute left-1/2 top-1/2 flex w-[min(90vw,34rem)] -translate-x-1/2 -translate-y-1/2 flex-col gap-6 rounded-3xl border-[#dadada] border bg-white p-8 text-base shadow-2xl sm:p-10 z-30 backdrop-blur-2xl">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-slate-800">
                Create a Task
              </h1>
            </div>

            <X
              onClick={closeForm}
              size={30}
              className="absolute right-5 top-5 cursor-pointer text-slate-700"
            />

            <div className="flex flex-col gap-2">
              <label htmlFor="todo" className="font-semibold text-slate-700">
                Task
              </label>

              <input
                ref={todoRef}
                type="text"
                id="todo"
                placeholder="What needs to be done?"
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-700 outline-none transition text-lg focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="priority"
                className="font-semibold text-slate-700 text-lg"
              >
                Priority
              </label>

              <select
                ref={priorityRef}
                id="priority"
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-700 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="date"
                className="font-semibold text-slate-700 text-lg"
              >
                Due date
              </label>

              <input
                ref={dateRef}
                type="date"
                id="date"
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-slate-700 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <button
              onClick={handleSubmit}
              type="button"
              className="mt-2 h-12 rounded-xl bg-black font-semibold text-xl cursor-pointer text-white shadow-lg shadow-indigo-200 transition hover:bg-white hover:text-black border active:scale-[.98] active:bg-[#dadada]"
            >
              Add Task
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Form;
