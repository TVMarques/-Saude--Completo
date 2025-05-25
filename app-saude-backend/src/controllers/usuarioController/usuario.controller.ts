// src/controllers/usuario.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UsuarioService } from '../../services/usuarioService/usuario.service';
import { CreateUsuarioDto } from '../../dtos/usuario/create-usuario.dto';
import { Usuario } from '../../models/usuario.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async criar(@Body() body: CreateUsuarioDto): Promise<Usuario> {
    return this.usuarioService.criar(body);
  }
}
