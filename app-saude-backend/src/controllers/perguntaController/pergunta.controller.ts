import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { PerguntaService } from '../../services/perguntaService/pergunta.service';
import { CreatePerguntaDto } from '../../dtos/pergunta/create-pergunta.dto';
import { UpdatePerguntaDto } from '../../dtos/pergunta/update-pergunta.dto';

@Controller('perguntas')
export class PerguntaController {
  constructor(private readonly perguntaService: PerguntaService) {}

  @Post()
  create(@Body() dto: CreatePerguntaDto) {
    return this.perguntaService.create(dto);
  }

  @Get()
  findAll() {
    return this.perguntaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.perguntaService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePerguntaDto) {
    return this.perguntaService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perguntaService.remove(+id);
  }
}
