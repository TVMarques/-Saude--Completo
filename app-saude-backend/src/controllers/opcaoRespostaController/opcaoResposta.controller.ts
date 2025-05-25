import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { OpcaoRespostaService } from '../../services/opcaoRespostaService/opcaoResposta.service';
import { CreateOpcaoRespostaDto } from '../../dtos/opcaoResposta/create-opcaoResposta.dto';
import { UpdateOpcaoRespostaDto } from '../../dtos/opcaoResposta/update-opcaoResposta.dto';

@Controller('opcoes-resposta')
export class OpcaoRespostaController {
  constructor(private readonly service: OpcaoRespostaService) {}

  @Post()
  create(@Body() dto: CreateOpcaoRespostaDto) {
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
  update(@Param('id') id: number, @Body() dto: UpdateOpcaoRespostaDto) {
    return this.service.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.service.remove(Number(id));
  }
}
