import { create } from "zustand";
import { Task } from "../types/Task";
import taskData from "./tasks.json";

interface TaskStore {
  tasks: Task[];
  taskView: number;
  previousView: number;
  allTasks: boolean;
  setView: (newView: number) => void;
  toggleAllViews: () => void;
}

export const useTask = create<TaskStore>((set) => ({
  tasks: taskData,
  previousView: 3,
  taskView: 3,
  allTasks: false,
  setView: (newView: number) =>
    set((state) => ({
      ...state,
      taskView: state.taskView + newView,
      previousView: state.taskView,
      allTasks: false,
    })),
  toggleAllViews: () =>
    set((state) => ({
      ...state,
      taskView:
        state.allTasks && state.previousView >= state.tasks.length / 2
          ? 3 // If too much items in the view, reset to the first 3.
          : state.allTasks
          ? state.previousView // If the previous state was true, go back to the last previous view
          : state.tasks.length, // show all the tasks
      allTasks: !state.allTasks,
    })),
}));
