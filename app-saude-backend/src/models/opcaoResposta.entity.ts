import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pergunta } from './pergunta.entity';

@Entity('opcao_resposta')
export class OpcaoResposta {
  @PrimaryGeneratedColumn()
  id_opcao: number;

  @Column()
  descricao: string;

  @ManyToOne(() => Pergunta, pergunta => pergunta.opcoesResposta)
  pergunta: Pergunta;
}
