import React from "react";
import AddIcon from "../atoms/icons/Add";
import PrimaryButton from "../atoms/buttons/PrimaryButton";

type TaskFormProps = {
  onAdd: (title: string) => void;
};

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [title, setTitle] = React.useState("");
  const [isFocused, setIsFocused] = React.useState(false);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && title.trim()) {
      onAdd(title.trim());
      setTitle("");
    }
  }

  return (
    <div className="flex items-center w-full max-w-3xl min-w-0 rounded-[8px] px-4 py-3 bg-oat shadow hover:shadow-lg transition-shadow">
      <AddIcon fill="#6e4b3a" className="w-5 h-5 mr-3 flex-shrink-0" />
      <input
        className="flex-1 min-w-0 bg-transparent outline-none text-base"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Adicionar nova tarefa (Enter para adicionar)"
        aria-label="Adicionar nova tarefa"
      />
      {(isFocused || title.trim()) && (
        <PrimaryButton
          onClick={() => {
            onAdd(title.trim());
            setTitle("");
          }}
          className="ml-3 px-3 py-1"
          disabled={!title.trim()}
        >
          Adicionar
        </PrimaryButton>
      )}
    </div>
  );
};

export default TaskForm;
