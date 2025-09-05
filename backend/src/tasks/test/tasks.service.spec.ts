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
    const result = service.create({ title: 'Comprar pão' });
    expect(result.data).toHaveProperty('id');
    expect(result.data.title).toBe('Comprar pão');
    expect(result.data.done).toBe(false);
    expect(result.message).toBe('Tarefa criada com sucesso');
  });

  it('should list all tasks', () => {
    service.create({ title: 'Comprar leite' });
    const result = service.findAll();
    expect(result.data.length).toBeGreaterThan(0);
    expect(result.message).toBe('Lista de tarefas retornada com sucesso');
  });

  it('should find a task by title', () => {
    service.create({ title: 'Comprar queijo' });
    service.create({ title: 'Comprar presunto' });
    const result = service.findAll('queijo');
    expect(result.data.length).toBe(1);
    expect(result.data[0].title).toBe('Comprar queijo');
  });

  it('should toggle the done status of a task', () => {
    const created = service.create({ title: 'Comprar café' });
    const result = service.toggleDone(created.data.id);
    expect(result.data.done).toBe(true);
    expect(result.message).toBe('Status da tarefa alterado com sucesso');
  });
});
