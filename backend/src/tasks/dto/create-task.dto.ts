import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ description: 'Título da tarefa' })
  @IsString()
  @IsNotEmpty()
  title: string;
}
