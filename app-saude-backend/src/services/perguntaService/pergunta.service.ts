import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pergunta } from '../../models/pergunta.entity';
import { CreatePerguntaDto } from '../../dtos/pergunta/create-pergunta.dto';
import { UpdatePerguntaDto } from '../../dtos/pergunta/update-pergunta.dto';

@Injectable()
export class PerguntaService {
  constructor(
    @InjectRepository(Pergunta)
    private perguntaRepository: Repository<Pergunta>,
  ) {}

  create(dto: CreatePerguntaDto): Promise<Pergunta> {
    const pergunta = this.perguntaRepository.create(dto);
    return this.perguntaRepository.save(pergunta);
  }

  findAll(): Promise<Pergunta[]> {
    return this.perguntaRepository.find({
      relations: ['respostas', 'opcoesResposta', 'detalhamentos'],
    });
  }

  async findOne(id: number): Promise<Pergunta> {
    const pergunta = await this.perguntaRepository.findOne({
      where: { id_pergunta: id },
      relations: ['respostas', 'opcoesResposta', 'detalhamentos'],
    });

    if (!pergunta) {
      throw new NotFoundException(`Pergunta com ID ${id} não encontrada`);
    }

    return pergunta;
  }

  async update(id: number, dto: UpdatePerguntaDto): Promise<Pergunta> {
    await this.perguntaRepository.update(id, dto);
    return this.findOne(id); // continua funcionando corretamente
  }

  async remove(id: number): Promise<void> {
    const pergunta = await this.findOne(id); // opcional, para lançar erro se não existir
    await this.perguntaRepository.delete(pergunta.id_pergunta);
  }
}
