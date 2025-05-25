import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Questionario } from './questionario.entity';
import { Pergunta } from './pergunta.entity';

@Entity('resposta')
export class Resposta {
  @PrimaryGeneratedColumn()
  id_resposta: number;

  @Column({ nullable: true })
  resposta_texto: string;

  @Column({ nullable: true })
  resposta_booleano: boolean;

  @Column({ nullable: true })
  resposta_numero: number;

  @Column({ nullable: true })
  detalhamento: string;

  @ManyToOne(() => Questionario, questionario => questionario.respostas)
  questionario: Questionario;

  @ManyToOne(() => Pergunta, pergunta => pergunta.respostas)
  pergunta: Pergunta;
}
