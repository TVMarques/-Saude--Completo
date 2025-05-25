import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Logradouro } from './logradouro.entity';
import { HistoricoPaciente } from './historicoPaciente.entity';
import { Agendamento } from './agendamento.entity';
import { Questionario } from './questionario.entity';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ nullable: true })
  nome: string;

  @Column({ nullable: true })
  cpf: string;

  @Column({ nullable: true })
  data_nascimento: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  telefone: string;
  
  @OneToOne(() => Logradouro, logradouro => logradouro.usuario, { nullable: true })
  @JoinColumn()
  logradouro: Logradouro;

  @OneToOne(() => HistoricoPaciente, { nullable: true })
  @JoinColumn()
  historicoPaciente: HistoricoPaciente;

  @OneToMany(() => Agendamento, agendamento => agendamento.usuario, { nullable: true })
  agendamentos: Agendamento[];

  @OneToMany(() => Questionario, questionario => questionario.usuario, { nullable: true })
  questionarios: Questionario[];
}
