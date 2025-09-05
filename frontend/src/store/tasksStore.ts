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
  total: number;
  pending: number;
  done: number;
  loading: boolean;
  loadTasks: (options?: {
    search?: string;
    status?: "pending" | "done";
  }) => Promise<void>;
  addTask: (title: string) => Promise<void>;
  toggleDone: (id: string) => Promise<void>;
};

export const useTasksStore = create<TasksStore>((set) => ({
  tasks: [],
  total: 0,
  pending: 0,
  done: 0,
  loading: false,
  loadTasks: async (options) => {
    set({ loading: true });
    const response = await fetchTasks(options);
    set({
      tasks: response.tasks,
      total: response.total,
      pending: response.pending,
      done: response.done,
      loading: false,
    });
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
