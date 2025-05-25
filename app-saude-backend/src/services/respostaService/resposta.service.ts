import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resposta } from '../../models/resposta.entity';
import { CreateRespostaDto } from '../../dtos/resposta/create.resposta.dto';
import { Questionario } from '../../models/questionario.entity';
import { Pergunta } from '../../models/pergunta.entity';

@Injectable()
export class RespostaService {
  constructor(
    @InjectRepository(Resposta)
    private respostaRepository: Repository<Resposta>,

    @InjectRepository(Questionario)
    private questionarioRepository: Repository<Questionario>,

    @InjectRepository(Pergunta)
    private perguntaRepository: Repository<Pergunta>,
  ) {}

  async create(createRespostaDto: CreateRespostaDto): Promise<Resposta> {
    const { id_questionario, id_pergunta, ...rest } = createRespostaDto;

    const questionario = await this.questionarioRepository.findOne({ where: { id_questionario } });
    if (!questionario) {
      throw new NotFoundException(`Questionario com id ${id_questionario} não encontrado`);
    }

    const pergunta = await this.perguntaRepository.findOne({ where: { id_pergunta } });
    if (!pergunta) {
      throw new NotFoundException(`Pergunta com id ${id_pergunta} não encontrada`);
    }

    const resposta = this.respostaRepository.create({
      ...rest,
      questionario,
      pergunta,
    });

    return this.respostaRepository.save(resposta);
  }

  async findAll(): Promise<Resposta[]> {
    return this.respostaRepository.find({ relations: ['questionario', 'pergunta'] });
  }

  async findOne(id: number): Promise<Resposta> {
    const resposta = await this.respostaRepository.findOne({
      where: { id_resposta: id },
      relations: ['questionario', 'pergunta'],
    });
    if (!resposta) {
      throw new NotFoundException(`Resposta com id ${id} não encontrada`);
    }
    return resposta;
  }

  async remove(id: number): Promise<void> {
    const resposta = await this.findOne(id);
    await this.respostaRepository.remove(resposta);
  }
}
