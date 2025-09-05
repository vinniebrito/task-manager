import { create } from "zustand";
import { fetchTasks, createTask, toggleTaskDone } from "../api/tasksApi";
import toast from "react-hot-toast";

type Task = {
  id: string;
  title: string;
  done: boolean;
};

type TasksStore = {
  tasks: Task[];
  loading: boolean;
  loadTasks: (search?: string) => Promise<void>;
  addTask: (title: string) => Promise<void>;
  toggleDone: (id: string) => Promise<void>;
};

export const useTasksStore = create<TasksStore>((set) => ({
  tasks: [],
  loading: false,
  loadTasks: async (search) => {
    set({ loading: true });
    const tasks = await fetchTasks(search);
    set({ tasks, loading: false });
  },

  addTask: async (title) => {
    await createTask(title);
    toast.success("Tarefa criada com sucesso!");
    await useTasksStore.getState().loadTasks();
  },

  toggleDone: async (id) => {
    await toggleTaskDone(id);
    toast.success("Tarefa atualizada com sucesso!");
    await useTasksStore.getState().loadTasks();
  },
}));
