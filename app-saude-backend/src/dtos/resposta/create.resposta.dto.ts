import { IsOptional, IsString, IsBoolean, IsNumber, IsInt } from 'class-validator';

export class CreateRespostaDto {
  @IsOptional()
  @IsString()
  resposta_texto?: string;

  @IsOptional()
  @IsBoolean()
  resposta_booleano?: boolean;

  @IsOptional()
  @IsNumber()
  resposta_numero?: number;

  @IsOptional()
  @IsString()
  detalhamento?: string;

  @IsInt()
  id_questionario: number;

  @IsInt()
  id_pergunta: number;
}
