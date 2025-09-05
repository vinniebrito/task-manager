import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskForm from "../TaskForm";

describe("TaskForm", () => {
  it("does not call onAdd if input is empty (Enter)", () => {
    const onAdd = jest.fn();
    render(<TaskForm onAdd={onAdd} />);
    const input = screen.getByLabelText("Adicionar nova tarefa");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    expect(onAdd).not.toHaveBeenCalled();
  });

  it("calls onAdd when pressing Enter with valid text", () => {
    const onAdd = jest.fn();
    render(<TaskForm onAdd={onAdd} />);
    const input = screen.getByLabelText("Adicionar nova tarefa");
    fireEvent.change(input, { target: { value: "  Estudar React  " } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    expect(onAdd).toHaveBeenCalledWith("Estudar React");
  });

  it('calls onAdd when clicking the "Add" button', () => {
    const onAdd = jest.fn();
    render(<TaskForm onAdd={onAdd} />);
    const input = screen.getByLabelText("Adicionar nova tarefa");
    fireEvent.change(input, { target: { value: "Testar botão" } });

    const button = screen.getByRole("button", { name: /adicionar/i });
    fireEvent.click(button);

    expect(onAdd).toHaveBeenCalledWith("Testar botão");
  });
});
