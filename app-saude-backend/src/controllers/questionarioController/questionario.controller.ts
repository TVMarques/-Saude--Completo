import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionarioService } from '../../services/questionarioService/questionario.service';
import { CreateQuestionarioDto } from '../../dtos/questionario/create-questionario.dto';
import { UpdateQuestionarioDto } from '../../dtos/questionario/update-questionario.dto';

@Controller('questionario')
export class QuestionarioController {
  constructor(private readonly questionarioService: QuestionarioService) {}

  @Post()
  create(@Body() dto: CreateQuestionarioDto) {
    return this.questionarioService.create(dto);
  }

  @Get()
  findAll() {
    return this.questionarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateQuestionarioDto) {
    return this.questionarioService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionarioService.remove(+id);
  }
}
