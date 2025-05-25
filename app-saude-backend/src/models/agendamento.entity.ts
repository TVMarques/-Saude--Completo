import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Calendario } from './calendario.entity';

@Entity('agendamento')
export class Agendamento {
  @PrimaryGeneratedColumn()
  id_agendamento: number;

  @Column()
  id_exame: number;

  @Column()
  id_consulta: number;

  @Column()
  data_agendada: string;

  @Column()
  horario: string;

  @ManyToOne(() => Usuario, usuario => usuario.agendamentos)
  usuario: Usuario;

  @ManyToOne(() => Calendario)
  calendario: Calendario;
}
