import React from "react";
import CheckboxIcon from "../atoms/icons/CheckBox";

type Task = {
  id?: string;
  title: string;
  done: boolean;
};

type TaskCardProps = {
  task: Task;
  onClick?: (id: string) => void;
};

const TaskCard: React.FC<TaskCardProps> = ({ task, onClick }) => (
  <div className="bg-sand rounded-lg w-full max-w-3xl px-4 py-3 flex items-start gap-2 shadow hover:shadow-md transition-shadow">
    <button
      type="button"
      className="focus:outline-none cursor-pointer"
      onClick={() => task.id && onClick?.(task.id)}
    >
      <CheckboxIcon done={task.done} />
    </button>
    <span
      className={`flex-1 text-base font-semibold break-words whitespace-pre-line ${
        task.done ? "line-through text-moss" : ""
      }`}
    >
      {task.title}
    </span>
  </div>
);

export default TaskCard;
