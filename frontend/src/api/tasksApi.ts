import axios from "axios";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_URL;

function getErrorMessage(error: any, defaultMsg: string) {
  if (!error.response)
    return "Não foi possível conectar ao servidor. Tente novamente mais tarde.";
  return defaultMsg;
}

export async function fetchTasks(search?: string) {
  try {
    const res = await axios.get(`${API_URL}/tasks`, {
      params: search ? { search } : {},
    });
    return res.data.data;
  } catch (error: any) {
    toast.error(
      getErrorMessage(
        error,
        "Não foi possível carregar suas tarefas. Por favor, tente novamente."
      )
    );
    throw error;
  }
}

export async function createTask(title: string) {
  try {
    const res = await axios.post(`${API_URL}/tasks`, { title });
    return res.data.data;
  } catch (error: any) {
    toast.error(
      getErrorMessage(
        error,
        "Não foi possível criar uma nova tarefa. Por favor, tente novamente."
      )
    );
    throw error;
  }
}

export async function toggleTaskDone(id: string) {
  try {
    const res = await axios.patch(`${API_URL}/tasks/${id}/done`);
    return res.data.data;
  } catch (error: any) {
    toast.error(
      getErrorMessage(
        error,
        "Não foi possível atualizar a tarefa. Por favor, tente novamente."
      )
    );
    throw error;
  }
}
