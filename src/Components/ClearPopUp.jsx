import { motion, AnimatePresence } from "motion/react";
import React, { useContext } from "react";
import { TaskContext } from "../TaskContext";


function ClearPopUp({activeState}) {

    const { setTasks , isClearActive, setisClearActive} = useContext(TaskContext)

    function clearAll(){
        setTasks([])
        setisClearActive(false)
    }
    
  return (
    <AnimatePresence>
      {isClearActive && <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm"
      >
        <div className="w-full max-w-md rounded-3xl border border-red-200 bg-white p-6 shadow-2xl shadow-red-200/40">
          <div className="mb-4 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Warning
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-800">
              Delete all tasks?
            </h2>
          </div>

          <p className="mb-6 text-center text-sm text-slate-600">
             All your current tasks will be
            permanently removed.
          </p>

          <div className="flex justify-center gap-3">
            <button
            onClick={() => {setisClearActive(false)}}
              type="button"
              className="rounded-xl border border-slate-300 bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
            >
              Cancel
            </button>
            <button
            onClick={clearAll}
              type="button"
              className="rounded-xl bg-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-500/30 transition hover:bg-red-600 cursor-pointer"
            >
              Delete All
            </button>
          </div>
        </div>
      </motion.div>}
    </AnimatePresence>
  );
}

export default ClearPopUp;
