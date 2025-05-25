/*import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logradouro } from '../../models/logradouro.entity';
import { CreateLogradouroDto } from '../../dtos/logradouro/create-logradouro.dto';

@Injectable()
export class LogradouroService {
  constructor(
    @InjectRepository(Logradouro)
    private readonly logradouroRepository: Repository<Logradouro>,
  ) {}

  async create(createLogradouroDto: CreateLogradouroDto): Promise<Logradouro> {
    console.log('DTO recebido no backend:', createLogradouroDto); // <-- Adiciona isso
    const logradouro = this.logradouroRepository.create(createLogradouroDto);
    return await this.logradouroRepository.save(logradouro);
}

  async findAll(): Promise<Logradouro[]> {
    return await this.logradouroRepository.find();
  }

  async findOne(id: number): Promise<Logradouro | null > {
    return await this.logradouroRepository.findOne({ where: { id_log: id } });
  }

  async remove(id: number): Promise<void> {
    await this.logradouroRepository.delete(id);
  }
}*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Logradouro } from '../../models/logradouro.entity';
import { CreateLogradouroDto } from '../../dtos/logradouro/create-logradouro.dto';
import { Usuario } from '../../models/usuario.entity';

@Injectable()
export class LogradouroService {
  constructor(
    @InjectRepository(Logradouro)
    private readonly logradouroRepository: Repository<Logradouro>,

    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(dto: CreateLogradouroDto): Promise<Logradouro> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id_usuario: dto.id_usuario },
    });

    if (!usuario) {
      throw new Error('Usuário não encontrado');
    }

    const logradouro = this.logradouroRepository.create({
      ...dto,
      usuario,
    });

    return this.logradouroRepository.save(logradouro);
  }

  async findAll(): Promise<Logradouro[]> {
    return this.logradouroRepository.find({ relations: ['usuario'] });
  }

 /* async findOne(id: number): Promise<Logradouro> {
    return this.logradouroRepository.findOne({
      where: { id_log: id },
      relations: ['usuario'],
    });
  }*/

    async findOne(id: number): Promise<Logradouro> {
    const logradouro = await this.logradouroRepository.findOne({
      where: { id_log: id },
      relations: ['usuario'],
    });

    if (!logradouro) {
      throw new NotFoundException(`Logradouro com ID ${id} não encontrado`);
    }

    return logradouro;
  }

  async remove(id: number): Promise<void> {
    await this.logradouroRepository.delete(id);
  }
}

