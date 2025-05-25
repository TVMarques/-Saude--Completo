import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('historico_paciente')
export class HistoricoPaciente {
  @PrimaryGeneratedColumn()
  id_historico: number;

  @Column()
  consultasAgendadas: string;

  @Column()
  examesAgendados: string;

  @Column()
  consultasRealizadas: string;

  @Column()
  examesRealizados: string;

  @OneToOne(() => Usuario)
  @JoinColumn()
  usuario: Usuario;
}
