import { IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateLogradouroDto } from '../logradouro/create-logradouro.dto';
import { CreateHistoricoPacienteDto } from '../historicoPaciente/create-historico-paciente.dto';

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  cpf: string;

  @IsNotEmpty()
  @IsString()
  data_nascimento: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  telefone: string;

  @Type(() => CreateLogradouroDto)
  @IsNotEmpty()
  logradouro: CreateLogradouroDto;

  @Type(() => CreateHistoricoPacienteDto)
  @IsOptional()
  historicoPaciente?: CreateHistoricoPacienteDto;
}
