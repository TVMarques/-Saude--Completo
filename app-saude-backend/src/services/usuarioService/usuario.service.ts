// src/services/usuario.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../../models/usuario.entity';
import { CreateUsuarioDto } from '../../dtos/usuario/create-usuario.dto';
import { Logradouro } from '../../models/logradouro.entity';
import { HistoricoPaciente } from '../../models/historicoPaciente.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Logradouro)
    private readonly logradouroRepository: Repository<Logradouro>,
    @InjectRepository(HistoricoPaciente)
    private readonly historicoRepository: Repository<HistoricoPaciente>,
  ) {}

  async criar(dto: CreateUsuarioDto): Promise<Usuario> {
    // Cria os dados relacionados primeiro
    const logradouro = this.logradouroRepository.create(dto.logradouro);
    const logradouroSalvo = await this.logradouroRepository.save(logradouro);

    let historicoSalvo: HistoricoPaciente | undefined = undefined;
    if (dto.historicoPaciente) {
      const historico = this.historicoRepository.create(dto.historicoPaciente);
      historicoSalvo = await this.historicoRepository.save(historico);
    }

    // Agora cria o usuário com as referências
    const usuario = this.usuarioRepository.create({
      ...dto,
      logradouro: logradouroSalvo,
      historicoPaciente: historicoSalvo,
    });

    return this.usuarioRepository.save(usuario);
  }
}
