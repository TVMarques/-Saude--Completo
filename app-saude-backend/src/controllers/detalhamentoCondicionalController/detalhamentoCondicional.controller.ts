import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { DetalhamentoCondicionalService } from '../../services/detalhamentoCondicional/detalhamentoCondicional.service';
import { CreateDetalhamentoCondicionalDto } from '../../dtos/detalhamentoCondicional/create-detalhamento-condicional.dto';
import { UpdateDetalhamentoCondicionalDto } from '../../dtos/detalhamentoCondicional/update-detalhamento-condicional.dto';

@Controller('detalhamentos-condicionais')
export class DetalhamentoCondicionalController {
  constructor(private readonly service: DetalhamentoCondicionalService) {}

  @Post()
  create(@Body() dto: CreateDetalhamentoCondicionalDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.service.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() dto: UpdateDetalhamentoCondicionalDto) {
    return this.service.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(Number(id));
  }
}
