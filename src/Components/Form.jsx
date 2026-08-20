import React, { useContext, useRef } from "react";
import { TaskContext } from "../TaskContext";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { themeContext } from "../ThemeContext";

function Form() {
  const { isFormActive, setIsFormActive, Tasks, setTasks } =
    useContext(TaskContext);
  const { theme } = useContext(themeContext);

  const todoRef = useRef();
  const priorityRef = useRef();
  const dateRef = useRef();

  const isDark = theme === "dark";
  const panelClasses = isDark
    ? "bg-[#1f1f1f] text-white border-[#3a3a3a]"
    : "bg-white text-slate-900 border-slate-200";
  const titleClasses = isDark ? "text-white" : "text-slate-800";
  const labelClasses = isDark ? "text-slate-200" : "text-slate-700";
  const iconClasses = isDark ? "text-slate-300" : "text-slate-700";
  const inputClasses = isDark
    ? "border-slate-600 bg-[#2a2a2a] text-white placeholder:text-slate-400 focus:border-indigo-400 focus:bg-[#303030] focus:ring-indigo-900"
    : "border-slate-200 bg-slate-50 text-slate-700 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-indigo-100";
  const buttonClasses = isDark
    ? "bg-indigo-500 text-white hover:bg-white hover:text-black shadow-indigo-900"
    : "bg-black text-white hover:bg-white hover:text-black shadow-indigo-200";

  function closeForm() {
    setIsFormActive(false);
  }

  function validation(task, priority, date) {
    if (task.trim() === "" || priority === "" || date === "") {
      return false;
    }
    return true;
  }

  function handleSubmit() {
    const task = todoRef.current.value;
    const priority = priorityRef.current.value;
    const date = dateRef.current.value;

    if (!validation(task, priority, date)) {
      alert("Fill the required information");
      return;
    }

    const newTask = {
      todo: task,
      priority,
      deadLine: date,
      done: false,
    };

    const newList = [...Tasks, newTask];
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
          className="absolute h-screen w-full backdrop-blur-[5px]"
        >
          <div
            className={`absolute left-1/2 top-1/2 z-30 flex w-[min(90vw,34rem)] -translate-x-1/2 -translate-y-1/2 flex-col gap-6 rounded-3xl border p-8 text-base shadow-2xl backdrop-blur-2xl sm:p-10 ${panelClasses}`}
          >
            <div className="text-center">
              <h1 className={`text-3xl font-bold ${titleClasses}`}>
                Create a Task
              </h1>
            </div>

            <X
              onClick={closeForm}
              size={30}
              className={`absolute right-5 top-5 cursor-pointer ${iconClasses}`}
            />

            <div className="flex flex-col gap-2">
              <label htmlFor="todo" className={`font-semibold ${labelClasses}`}>
                Task
              </label>

              <input
                ref={todoRef}
                type="text"
                id="todo"
                placeholder="What needs to be done?"
                className={`h-12 w-full rounded-xl border px-4 text-lg outline-none transition ${inputClasses}`}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="priority"
                className={`font-semibold text-lg ${labelClasses}`}
              >
                Priority
              </label>

              <select
                ref={priorityRef}
                id="priority"
                className={`h-12 w-full rounded-xl border px-4 outline-none transition ${inputClasses}`}
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="date"
                className={`font-semibold text-lg ${labelClasses}`}
              >
                Due date
              </label>

              <input
                ref={dateRef}
                type="date"
                id="date"
                className={`h-12 w-full rounded-xl border px-4 outline-none transition ${inputClasses}`}
              />
            </div>

            <button
              onClick={handleSubmit}
              type="button"
              className={`mt-2 h-12 cursor-pointer rounded-xl border font-semibold text-xl shadow-lg transition hover:bg-white hover:text-black active:scale-[.98] active:bg-[#dadada] ${buttonClasses}`}
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
