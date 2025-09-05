import React from "react";
import Header from "./components/organisms/Header";
import TaskForm from "./components/organisms/TaskForm";
import TaskCard from "./components/organisms/TaskCard";
import { useTasksStore } from "./store/tasksStore";
import Spinner from "./components/atoms/Spinner";
import Footer from "./components/organisms/Footer";
import AppToaster from "./components/AppToaster";

function App() {
  const [search, setSearch] = React.useState("");
  const { tasks, addTask, loadTasks, loading, toggleDone } = useTasksStore();

  React.useEffect(() => {
    const handler = setTimeout(() => {
      loadTasks(search);
    }, 400);

    return () => clearTimeout(handler);
  }, [search]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header search={search} setSearch={setSearch} />
      <main className="flex-1 flex flex-col items-center gap-4 p-4">
        <p className="text-sm">Você tem {tasks.length} tarefas hoje.</p>
        <TaskForm onAdd={addTask} />
        <div className="max-w-3xl w-full mx-auto flex flex-col gap-4">
          {loading && <Spinner />}
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onClick={toggleDone} />
          ))}
        </div>
      </main>
      <Footer />
      <AppToaster />
    </div>
  );
}

export default App;
