import { IsOptional, IsString } from 'class-validator';

export class CreateHistoricoPacienteDto {
  @IsOptional()
  @IsString()
  consultasAgendadas: string;

  @IsOptional()
  @IsString()
  examesAgendados: string;

  @IsOptional()
  @IsString()
  consultasRealizadas: string;

  @IsOptional()
  @IsString()
  examesRealizados: string;
}
