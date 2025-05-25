import React from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import TituloSaudeComponent from '../components/TituloSaudeComponent';
import BotaoSaudeComponent from '../components/BotaoSaudeComponent';
import MensagemSucessoComponent from '../components/MensagemSucessoComponent';

export default function SucessoScreen({ navigation }) { 

  const route = useRoute();
  const { tipo } = route.params;

  let mensagem = '';
  if (tipo === 'consulta') {
    mensagem = 'Agendamento da consulta realizado com sucesso!';
  } else if (tipo === 'exame') {
    mensagem = 'Agendamento do exame realizado com sucesso!';
  } else {
    mensagem = 'Agendamento realizado com sucesso!';
  }

  return (
    <LinearGradient colors={['#79DDF3', '#5E845F']} style={styles.container}>
         <BotaoSaudeComponent //o botão primeiro, senão não funciona.
          rotulo='Voltar'
          onPress={() => navigation.goBack()}
          estiloContainer={{ width: 95, position:'relative', top: 585, left: 148 }}
          estiloTexto={{fontSize: 16, paddingVertical: 4}}
       />      

        <TituloSaudeComponent
                rotulo='AGENDAMENTO DE CONSULTAS'
                containerStyle={{position:'relative', bottom: 110, paddingHorizontal: 6, paddingVertical: 4,}}//Usando a props para mexer no estilo do componente
                textStyle={{fontSize: 15}}
        />

        <MensagemSucessoComponent
          mensagem={mensagem}
          estiloCard={{position: 'relative', bottom: 50}}
        />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 29,
    overflow: 'hidden',
    marginTop: 24,
    marginBottom: 48
  },
  innerContainer: {
    padding: 10,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 55
  },
  
});