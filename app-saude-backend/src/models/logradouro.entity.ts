import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Usuario } from './usuario.entity';

@Entity('logradouro')
export class Logradouro {
  @PrimaryGeneratedColumn()
  id_log: number;

  @Column({ nullable: true })
  endereco: string;

  @Column({ nullable: true })
  numero: string;

  @Column({ nullable: true })
  complemento: string;

  @Column({ nullable: true })
  bairro: string;

  @Column({ nullable: true })
  cep: string;

  @Column({ nullable: true })
  cidade: string;

  @Column({ nullable: true })
  UF: string;

  @OneToOne(() => Usuario, usuario => usuario.logradouro, { nullable: true })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;
}
