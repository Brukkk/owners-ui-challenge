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
      taskView: state.allTasks ? state.previousView : state.tasks.length,
      allTasks: !state.allTasks,
    })),
}));
