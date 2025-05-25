import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateLogradouroDto {
  @IsNotEmpty()
  @IsString()
  endereco: string;

  @IsNotEmpty()
  @IsString()
  numero: string;

  @IsNotEmpty()
  @IsString()
  complemento: string;

  @IsNotEmpty()
  @IsString()
  bairro: string;

  @IsNotEmpty()
  @IsString()
  cep: string;

  @IsNotEmpty()
  @IsString()
  cidade: string;

  @IsNotEmpty()
  @IsString()
  UF: string;

  @IsNotEmpty()
  @IsNumber()
  id_usuario: number;
}
