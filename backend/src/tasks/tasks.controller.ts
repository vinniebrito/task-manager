import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @ApiOperation({ summary: 'Retorna todas as tarefas' })
  @ApiResponse({ status: 200, description: 'Lista de tarefas.' })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Filtrar tarefas pelo título',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    description: "Filtrar tarefas pelo status: 'pending' ou 'done'",
  })
  @Get()
  findAll(@Query('search') search?: string, @Query('status') status?: string) {
    return this.tasksService.findAll(search, status);
  }

  @ApiOperation({ summary: 'Cria uma nova tarefa' })
  @ApiResponse({ status: 201, description: 'Tarefa criada com sucesso.' })
  @ApiBody({ type: CreateTaskDto })
  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @ApiOperation({ summary: 'Alterna o status de conclusão da tarefa' })
  @ApiResponse({ status: 200, description: 'Status da tarefa alternado.' })
  @ApiParam({ name: 'id', description: 'ID da tarefa' })
  @Patch(':id/done')
  toggleDone(@Param('id') id: string) {
    return this.tasksService.toggleDone(id);
  }
}
