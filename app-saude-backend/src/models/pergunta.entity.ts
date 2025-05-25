import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Resposta } from './resposta.entity';
import { OpcaoResposta } from './opcaoResposta.entity';
import { DetalhamentoCondicional } from './detalhamentoCondicional.entity';

@Entity('pergunta')
export class Pergunta {
  @PrimaryGeneratedColumn()
  id_pergunta: number;

  @Column()
  texto: string;

  @Column()
  topico: string;

  @Column()
  tipo_resposta: string;

  @Column()
  possui_detalhamento: boolean;

  @OneToMany(() => Resposta, resposta => resposta.pergunta)
  respostas: Resposta[];

  @OneToMany(() => OpcaoResposta, opcao => opcao.pergunta)
  opcoesResposta: OpcaoResposta[];

  @OneToMany(() => DetalhamentoCondicional, detalhe => detalhe.pergunta)
  detalhamentos: DetalhamentoCondicional[];
}
