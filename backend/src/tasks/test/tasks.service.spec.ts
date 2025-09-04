import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from '../tasks.service';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  it('should create a new task', () => {
    const task = service.create({ title: 'Comprar pão' });
    expect(task).toHaveProperty('id');
    expect(task.title).toBe('Comprar pão');
    expect(task.done).toBe(false);
  });

  it('should list all tasks', () => {
    service.create({ title: 'Comprar leite' });
    const tasks = service.findAll();
    expect(tasks.length).toBeGreaterThan(0);
  });

  it('should find a task by title', () => {
    service.create({ title: 'Comprar queijo' });
    service.create({ title: 'Comprar presunto' });
    const filteredTasks = service.findAll('queijo');
    expect(filteredTasks.length).toBe(1);
    expect(filteredTasks[0].title).toBe('Comprar queijo');
  });

  it('should toggle the done status of a task', () => {
    const task = service.create({ title: 'Comprar café' });
    const doneTask = service.toggleDone(task.id);
    expect(doneTask.done).toBe(true);
  });
});
