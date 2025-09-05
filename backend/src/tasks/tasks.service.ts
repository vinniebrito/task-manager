import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/tasks.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAll(
    search?: string,
    status?: string,
  ): {
    message: string;
    data: { tasks: Task[]; total: number; pending: number; done: number };
  } {
    let result = this.tasks;

    if (search) {
      result = result.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (status === 'pending') {
      result = result.filter((task) => !task.done);
    } else if (status === 'done') {
      result = result.filter((task) => task.done);
    }

    const sorted = result.sort((a, b) => Number(a.done) - Number(b.done));
    const total = this.tasks.length;
    const pending = this.tasks.filter((t) => !t.done).length;
    const done = this.tasks.filter((t) => t.done).length;

    return {
      message: 'Lista de tarefas retornada com sucesso.',
      data: {
        tasks: sorted,
        total,
        pending,
        done,
      },
    };
  }

  create(dto: CreateTaskDto): { message: string; data: Task } {
    const task: Task = {
      id: uuidv4(),
      title: dto.title.trim(),
      done: false,
    };
    this.tasks.push(task);
    return {
      message: 'Tarefa criada com sucesso!',
      data: task,
    };
  }

  toggleDone(id: string): { message: string; data: Task } {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) {
      throw new NotFoundException('Tarefa não encontrada');
    }
    task.done = !task.done;
    return {
      message: 'Status da tarefa alterado com sucesso!',
      data: task,
    };
  }
}
