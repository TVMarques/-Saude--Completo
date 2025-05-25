import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('calendario')
export class Calendario {
  @PrimaryGeneratedColumn()
  id_calendario: number;

  @Column()
  id_mes: number;

  @Column()
  id_dia: number;

  @Column()
  id_horarios: number;

  @Column()
  possui_detalhamento: boolean;
}
