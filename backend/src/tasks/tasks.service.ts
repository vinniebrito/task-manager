import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './entities/tasks.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  findAll(search?: string): Task[] {
    if (!search) return this.tasks;
    return this.tasks.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase()),
    );
  }

  create(dto: CreateTaskDto): Task {
    const task: Task = {
      id: uuidv4(),
      title: dto.title.trim(),
      done: false,
    };
    this.tasks.push(task);
    return task;
  }

  toggleDone(id: string): Task {
    const task = this.tasks.find((t) => t.id === id);
    if (!task) throw new NotFoundException('Task not found');
    task.done = !task.done;
    return task;
  }
}
