import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TituloSaudeComponent from '../components/TituloSaudeComponent';
import BotaoSaudeComponent from '../components/BotaoSaudeComponent';
import BotaoImagemComponent from '../components/BotaoImagemComponent';


export default function OpcoesScreen({navigation}){
    return(
        <LinearGradient colors={['#79DDF3', '#5E845F']} style={styles.container1}>
            <TituloSaudeComponent
              rotulo='Olá, como posso ajudar?'
              containerStyle={{position:'relative', bottom: 40}}//Usando a props para mexer no estilo do componente
            />

            <View style={styles.botaoBox}>
              <BotaoImagemComponent
                onPress={() => navigation.navigate('Agendamento')}
                imageSource={require('../../assets/images/Group 57.png')}
              />

              <BotaoImagemComponent
                onPress={() => navigation.navigate('AgendamentoExame')}
                imageSource={require('../../assets/images/AgendamentoExame.png')}
              />

              <BotaoImagemComponent
                onPress={() => navigation.navigate('HistoricoPaciente')}
                imageSource={require('../../assets/images/HistoricoPaciente.png')}
              />
            </View>

            <View style={styles.botaoBox}>
              <BotaoImagemComponent
                onPress={() => navigation.navigate('InfoDica')}
                imageSource={require('../../assets/images/InfoDica.png')}
              />

              <BotaoImagemComponent
                onPress={() => navigation.navigate('AjudaSuporte')}
                imageSource={require('../../assets/images/Ajuda.png')}
              />

              <BotaoImagemComponent
                onPress={() => navigation.navigate('EditarEExcluir')}
                imageSource={require('../../assets/images/ExcEditar.png')}
              />
            </View>
           

            <BotaoSaudeComponent
              rotulo='Sair do Aplicativo'
              onPress={() => navigation.navigate('Login')}
              estiloContainer={{width: 340, marginLeft: 22, marginTop: 40}}
            />

        </LinearGradient>
    );
}

 const styles = StyleSheet.create({
  container1: {
    flex:1,
    borderRadius: 29,
    overflow: 'hidden',
    marginTop: 24,
    marginBottom: 48
  },  

  botaoBox:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    
  }
 })