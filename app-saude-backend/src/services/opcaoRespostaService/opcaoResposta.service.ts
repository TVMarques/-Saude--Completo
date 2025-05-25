import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OpcaoResposta } from '../../models/opcaoResposta.entity';
import { CreateOpcaoRespostaDto } from '../../dtos/opcaoResposta/create-opcaoResposta.dto';
import { UpdateOpcaoRespostaDto } from '../../dtos/opcaoResposta/update-opcaoResposta.dto';
import { Pergunta } from '../../models/pergunta.entity';

@Injectable()
export class OpcaoRespostaService {
  constructor(
    @InjectRepository(OpcaoResposta)
    private opcaoRespostaRepository: Repository<OpcaoResposta>,

    @InjectRepository(Pergunta)
    private perguntaRepository: Repository<Pergunta>,
  ) {}

  async create(dto: CreateOpcaoRespostaDto): Promise<OpcaoResposta> {
    const pergunta = await this.perguntaRepository.findOne({ where: { id_pergunta: dto.perguntaId } });
    if (!pergunta) {
      throw new NotFoundException('Pergunta não encontrada.');
    }

    const opcao = this.opcaoRespostaRepository.create({ descricao: dto.descricao, pergunta });
    return this.opcaoRespostaRepository.save(opcao);
  }

  findAll(): Promise<OpcaoResposta[]> {
    return this.opcaoRespostaRepository.find({ relations: ['pergunta'] });
  }

  // Adaptado para async/await com verificação explícita de null
  async findOne(id: number): Promise<OpcaoResposta> {
    const opcao = await this.opcaoRespostaRepository.findOne({
      where: { id_opcao: id },
      relations: ['pergunta'],
    });

    if (!opcao) {
      throw new NotFoundException(`Opção de resposta com ID ${id} não encontrada.`);
    }

    return opcao;
  }

  async update(id: number, dto: UpdateOpcaoRespostaDto): Promise<OpcaoResposta> {
    const opcao = await this.findOne(id); // já lança NotFoundException se não existir

    if (dto.perguntaId) {
      const pergunta = await this.perguntaRepository.findOne({ where: { id_pergunta: dto.perguntaId } });
      if (!pergunta) throw new NotFoundException('Pergunta não encontrada.');
      opcao.pergunta = pergunta;
    }

    opcao.descricao = dto.descricao ?? opcao.descricao;
    return this.opcaoRespostaRepository.save(opcao);
  }

  async remove(id: number): Promise<void> {
    const opcao = await this.findOne(id); // já lança NotFoundException se não existir
    await this.opcaoRespostaRepository.delete(opcao.id_opcao);
  }
}

