import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateQuestionarioDto {
  @IsNotEmpty()
  @IsString()
  data_resposta: string;

  @IsNotEmpty()
  @IsNumber()
  id_usuario: number;
}