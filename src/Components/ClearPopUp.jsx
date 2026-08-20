import { motion, AnimatePresence } from "motion/react";
import { useContext } from "react";
import { TaskContext } from "../TaskContext";
import { themeContext } from "../ThemeContext";

function ClearPopUp() {
  const { setTasks, isClearActive, setisClearActive } = useContext(TaskContext);
  const { theme } = useContext(themeContext);

  function clearAll() {
    setTasks([]);
    setisClearActive(false);
  }

  const isDarkTheme = theme === "dark";

  return (
    <AnimatePresence>
      {isClearActive && (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
        >
          <div
            className={`w-full max-w-md rounded-3xl border p-6 shadow-2xl ${
              isDarkTheme
                ? "border-slate-700 bg-[#333] text-white shadow-red-500/20"
                : "border-red-200 bg-white text-black shadow-red-200/40"
            }`}
          >
            <div className="mb-4 text-center">
              <p
                className={`text-sm font-medium uppercase tracking-[0.2em] ${isDarkTheme ? "text-slate-300" : "text-slate-500"}`}
              >
                Warning
              </p>
              <h2
                className={`mt-2 text-2xl font-bold ${isDarkTheme ? "text-white" : "text-slate-800"}`}
              >
                Delete all tasks?
              </h2>
            </div>

            <p
              className={`mb-6 text-center text-sm ${isDarkTheme ? "text-slate-300" : "text-slate-600"}`}
            >
              All your current tasks will be permanently removed.
            </p>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => setisClearActive(false)}
                type="button"
                className={`rounded-xl border px-5 py-2.5 text-sm font-semibold transition ${
                  isDarkTheme
                    ? "border-slate-600 bg-slate-700 text-slate-200 hover:bg-slate-600"
                    : "border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                Cancel
              </button>
              <button
                onClick={clearAll}
                type="button"
                className="cursor-pointer rounded-xl bg-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-500/30 transition hover:bg-red-600"
              >
                Delete All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ClearPopUp;
