import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pergunta } from './pergunta.entity';

@Entity('detalhamento_condicional')
export class DetalhamentoCondicional {
  @PrimaryGeneratedColumn()
  id_detalhamento: number;

  @Column()
  condicao_opcao: string;

  @Column()
  tipo_detalhamento: string;

  @ManyToOne(() => Pergunta, pergunta => pergunta.detalhamentos)
  pergunta: Pergunta;
}
