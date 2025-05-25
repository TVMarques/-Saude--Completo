import { CreateLogradouroDto } from '../logradouro/create-logradouro.dto';
import { HistoricoPacienteDto } from '../historicoPaciente/historico-paciente.dto';

export class UsuarioDto {
  id_usuario: number;
  nome: string;
  cpf: string;
  data_nascimento: string;
  email: string;
  telefone: string;
  logradouro: CreateLogradouroDto;
  historicoPaciente?: HistoricoPacienteDto;
}
