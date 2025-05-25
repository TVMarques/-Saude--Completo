import { Controller, Get, Post, Body, Param, Delete,  NotFoundException } from '@nestjs/common';
import { LogradouroService } from '../../services/logradouroService/logradoro.service';
import { CreateLogradouroDto } from '../../dtos/logradouro/create-logradouro.dto';
import { Logradouro } from '../../models/logradouro.entity';

@Controller('logradouro')
export class LogradouroController {
  constructor(private readonly logradouroService: LogradouroService) {}

  @Post()
  create(@Body() createLogradouroDto: CreateLogradouroDto): Promise<Logradouro> {
    return this.logradouroService.create(createLogradouroDto);
  }

  @Get()
  findAll(): Promise<Logradouro[]> {
    return this.logradouroService.findAll();
  }

  /*@Get(':id')
  findOne(@Param('id') id: string): Promise<Logradouro> {
    return this.logradouroService.findOne(+id);
  }*/

 @Get(':id')
  async findOne(@Param('id') id: number): Promise<Logradouro> {
    const logradouro = await this.logradouroService.findOne(id);
    
    if (!logradouro) {
      throw new NotFoundException(`Logradouro com ID ${id} não encontrado`);
    }

    return logradouro;
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.logradouroService.remove(+id);
  }
}
