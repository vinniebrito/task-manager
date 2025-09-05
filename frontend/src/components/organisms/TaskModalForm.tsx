import React, { useState } from "react";
import PrimaryButton from "../atoms/buttons/PrimaryButton";

type TaskModalFormProps = {
  onAdd: (title: string, description: string) => void;
  onClose: () => void;
};

function TaskModalForm({ onAdd, onClose }: TaskModalFormProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim(), description.trim());
      setTitle("");
      setDescription("");
    }
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <h2 className="text-lg font-semibold">Adicionar nova tarefa:</h2>
      <div>
        <textarea
          id="title"
          className="w-full border-b border-limewash focus:outline-none px-3 py-2 resize-none overflow-hidden"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título da tarefa"
          required
          rows={1}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = "auto";
            target.style.height = target.scrollHeight + "px";
          }}
        />
      </div>

      <div className="flex justify-end gap-4">
        <button
          className="text-limewash font-semibold hover:bg-oat px-2 rounded-[8px] cursor-pointer"
          type="button"
          onClick={onClose}
        >
          Fechar
        </button>

        <PrimaryButton type="submit" disabled={!title.trim()}>
          Adicionar
        </PrimaryButton>
      </div>
    </form>
  );
}

export default TaskModalForm;
