import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './models/usuario.entity';
import { Logradouro } from './models/logradouro.entity';
import { HistoricoPaciente } from './models/historicoPaciente.entity';
import { UsuarioController } from './controllers/usuarioController/usuario.controller';
import { UsuarioService } from './services/usuarioService/usuario.service';
import { LogradouroService } from './services/logradouroService/logradoro.service';
import { LogradouroController } from './controllers/logradouroController/logradouro.controller';

import { Questionario } from './models/questionario.entity';
import { QuestionarioController } from './controllers/questionarioController/questionario.controller';
import { QuestionarioService } from './services/questionarioService/questionario.service';

import { Resposta } from './models/resposta.entity';
import { RespostaController } from './controllers/respostaController/resposta.controller';
import { RespostaService } from './services/respostaService/resposta.service';

import { Pergunta } from './models/pergunta.entity';
import { PerguntaService } from './services/perguntaService/pergunta.service';
import { PerguntaController } from './controllers/perguntaController/pergunta.controller';

import { OpcaoResposta } from './models/opcaoResposta.entity';
import { OpcaoRespostaService } from './services/opcaoRespostaService/opcaoResposta.service';
import { OpcaoRespostaController } from './controllers/opcaoRespostaController/opcaoResposta.controller';

import { DetalhamentoCondicional } from './models/detalhamentoCondicional.entity';
import { DetalhamentoCondicionalService } from './services/detalhamentoCondicional/detalhamentoCondicional.service';
import { DetalhamentoCondicionalController } from './controllers/detalhamentoCondicionalController/detalhamentoCondicional.controller';

@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'thiago',
      database: 'saudeapp',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Cuidado: apenas em dev!
      }),
      TypeOrmModule.forFeature([Usuario, Logradouro, HistoricoPaciente, Questionario, Resposta, Pergunta, OpcaoResposta, DetalhamentoCondicional]),


  ],
  controllers: [UsuarioController, LogradouroController, QuestionarioController,RespostaController, PerguntaController, OpcaoRespostaController, DetalhamentoCondicionalController],
  providers: [UsuarioService, LogradouroService, QuestionarioService, RespostaService, PerguntaService, OpcaoRespostaService, DetalhamentoCondicionalService],
})
export class AppModule {}
