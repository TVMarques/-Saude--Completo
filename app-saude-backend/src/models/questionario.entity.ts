import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Resposta } from './resposta.entity';

@Entity('questionario')
export class Questionario {
  @PrimaryGeneratedColumn()
  id_questionario: number;

  @Column()
  data_resposta: string;

  @ManyToOne(() => Usuario, usuario => usuario.questionarios)
  usuario: Usuario;

  @OneToMany(() => Resposta, resposta => resposta.questionario)
  respostas: Resposta[];
}
