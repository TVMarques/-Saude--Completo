import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Questionario } from '../../models/questionario.entity';
import { CreateQuestionarioDto } from '../../dtos/questionario/create-questionario.dto';
import { UpdateQuestionarioDto } from '../../dtos/questionario/update-questionario.dto';

@Injectable()
export class QuestionarioService {
  constructor(
    @InjectRepository(Questionario)
    private readonly questionarioRepository: Repository<Questionario>,
  ) {}

  create(createQuestionarioDto: CreateQuestionarioDto) {
    const questionario = this.questionarioRepository.create(createQuestionarioDto);
    return this.questionarioRepository.save(questionario);
  }

  findAll() {
    return this.questionarioRepository.find({ relations: ['id_usuario'] });
  }

  findOne(id: number) {
    return this.questionarioRepository.findOne({ where: { id_questionario: id }, relations: ['id_usuario'] });
  }

  update(id: number, updateQuestionarioDto: UpdateQuestionarioDto) {
    return this.questionarioRepository.update(id, updateQuestionarioDto);
  }

  remove(id: number) {
    return this.questionarioRepository.delete(id);
  }
}
