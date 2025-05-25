import { Controller, Post, Body, Get, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { RespostaService } from '../../services/respostaService/resposta.service';
import { CreateRespostaDto } from '../../dtos/resposta/create.resposta.dto';
import { Resposta } from '../../models/resposta.entity';

@Controller('respostas')
export class RespostaController {
  constructor(private readonly respostaService: RespostaService) {}

  @Post()
  create(@Body() createRespostaDto: CreateRespostaDto): Promise<Resposta> {
    return this.respostaService.create(createRespostaDto);
  }

  @Get()
  findAll(): Promise<Resposta[]> {
    return this.respostaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Resposta> {
    return this.respostaService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.respostaService.remove(id);
  }
}
