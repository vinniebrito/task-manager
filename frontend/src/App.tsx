import React from "react";
import Header from "./components/organisms/Header";
import TaskForm from "./components/organisms/TaskForm";
import TaskCard from "./components/organisms/TaskCard";
import { useTasksStore } from "./store/tasksStore";
import Spinner from "./components/atoms/Spinner";
import Footer from "./components/organisms/Footer";
import AppToaster from "./components/AppToaster";
import Modal from "./components/molecules/Modal";
import TaskModalForm from "./components/organisms/TaskModalForm";

function App() {
  const [search, setSearch] = React.useState("");
  const [modalOpen, setModalOpen] = React.useState(false);
  const { tasks, addTask, loadTasks, loading, toggleDone, pending } =
    useTasksStore();

  React.useEffect(() => {
    const handler = setTimeout(() => {
      loadTasks({ search });
    }, 400);

    return () => clearTimeout(handler);
  }, [search]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        search={search}
        setSearch={setSearch}
        onAddTaskClick={() => setModalOpen(true)}
      />
      <main className="flex-1 flex flex-col items-center gap-4 p-4">
        <p className="text-sm font-medium">
          {pending === 0 ? (
            <>Parabéns, você não tem nenhuma tarefa pendente!</>
          ) : (
            <>
              Você tem <span className="font-bold">{pending}</span> tarefa
              {pending > 1 ? "s" : ""} pendente{pending > 1 ? "s" : ""} hoje.
            </>
          )}
        </p>

        <div className="max-w-3xl w-full mx-auto flex flex-col gap-4">
          {loading && <Spinner />}
          {!loading && search && tasks.length === 0 && (
            <div className="text-center text-gray-500 py-8">
              Nenhuma tarefa encontrada para sua busca.
            </div>
          )}
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} onClick={toggleDone} />
          ))}
        </div>
        <TaskForm onAdd={addTask} />
      </main>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <TaskModalForm
          onAdd={(title) => {
            addTask(title);
            setModalOpen(false);
          }}
          onClose={() => setModalOpen(false)}
        />
      </Modal>
      <Footer />
      <AppToaster />
    </div>
  );
}

export default App;
