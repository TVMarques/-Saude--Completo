import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetalhamentoCondicional } from '../../models/detalhamentoCondicional.entity';
import { CreateDetalhamentoCondicionalDto } from '../../dtos/detalhamentoCondicional/create-detalhamento-condicional.dto';
import { UpdateDetalhamentoCondicionalDto } from '../../dtos/detalhamentoCondicional/update-detalhamento-condicional.dto';
import { Pergunta } from '../../models/pergunta.entity';

@Injectable()
export class DetalhamentoCondicionalService {
  constructor(
    @InjectRepository(DetalhamentoCondicional)
    private detalhamentoRepository: Repository<DetalhamentoCondicional>,

    @InjectRepository(Pergunta)
    private perguntaRepository: Repository<Pergunta>,
  ) {}

  async create(dto: CreateDetalhamentoCondicionalDto): Promise<DetalhamentoCondicional> {
    const pergunta = await this.perguntaRepository.findOne({ where: { id_pergunta: dto.perguntaId } });
    if (!pergunta) throw new NotFoundException('Pergunta não encontrada.');

    const detalhamento = this.detalhamentoRepository.create({
      condicao_opcao: dto.condicao_opcao,
      tipo_detalhamento: dto.tipo_detalhamento,
      pergunta,
    });

    return this.detalhamentoRepository.save(detalhamento);
  }

  findAll(): Promise<DetalhamentoCondicional[]> {
    return this.detalhamentoRepository.find({ relations: ['pergunta'] });
  }

  // Adaptado para async/await e verificação explícita de null
  async findOne(id: number): Promise<DetalhamentoCondicional> {
    const detalhamento = await this.detalhamentoRepository.findOne({
      where: { id_detalhamento: id },
      relations: ['pergunta'],
    });

    if (!detalhamento) {
      throw new NotFoundException(`Detalhamento condicional com ID ${id} não encontrado.`);
    }

    return detalhamento;
  }

  async update(id: number, dto: UpdateDetalhamentoCondicionalDto): Promise<DetalhamentoCondicional> {
    const detalhamento = await this.findOne(id); // já lança NotFoundException se não existir

    if (dto.perguntaId) {
      const pergunta = await this.perguntaRepository.findOne({ where: { id_pergunta: dto.perguntaId } });
      if (!pergunta) throw new NotFoundException('Pergunta não encontrada.');
      detalhamento.pergunta = pergunta;
    }

    detalhamento.condicao_opcao = dto.condicao_opcao ?? detalhamento.condicao_opcao;
    detalhamento.tipo_detalhamento = dto.tipo_detalhamento ?? detalhamento.tipo_detalhamento;

    return this.detalhamentoRepository.save(detalhamento);
  }

  async remove(id: number): Promise<void> {
    const detalhamento = await this.findOne(id); // já lança NotFoundException se não existir
    await this.detalhamentoRepository.delete(detalhamento.id_detalhamento);
  }
}

