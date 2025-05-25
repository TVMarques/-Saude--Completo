import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import TituloSaudeComponent from '../components/TituloSaudeComponent';
import BotaoSaudeComponent from '../components/BotaoSaudeComponent';
import MensagemSucessoComponent from '../components/MensagemSucessoComponent';
import BotaoImagemComponent from '../components/BotaoImagemComponent';

const { width, height } = Dimensions.get('window');
let mensagem = 'Deseja realmante excluir seus dados cadastrais de forma permanente?';

type RootStackParamList = {
  Home: undefined;
  TelaDesejaExcluir: undefined;
  TelaExcluidoSucesso: undefined;
};

export default function TelaDesejaExcluir() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <LinearGradient colors={['#79dcf1', '#5e8561']} style={styles.background}>
      
      <TituloSaudeComponent 
        rotulo="Excluir dados cadastrais" 
        containerStyle={{ marginTop: -46 }} 
        textStyle={{ fontSize: 19, marginLeft: 22 }}
      />


      <View style={styles.botaoBox}>
            <BotaoImagemComponent
                onPress={() => navigation.navigate('TelaExcluidoSucesso')}
                imageSource={require('../../assets/images/sim.png')}
            />
      
            <BotaoImagemComponent
                onPress={() => navigation.navigate('Opcoes')}
                imageSource={require('../../assets/images/nao.png')}
            />
      </View>

      {/* Botão voltar */}
        <BotaoSaudeComponent 
            rotulo="Voltar" 
            estiloContainer={{width: 95, height: 29, marginTop: 105, marginLeft: 150 }}
            estiloTexto={{fontSize: 18, paddingVertical: 2}}
            onPress={() => navigation.goBack()} 
        />

     {/* Caixa informativa */}
      <View style={styles.infoBox}>
         <MensagemSucessoComponent
            mensagem={mensagem}
            estiloCard={{width: 309}}
            estiloContainerText={{height: 138, width: 306}}
            estiloTexto={{fontFamily: 'Rubik-SemiBold', fontSize: 16, width: 288, height: 41, position: 'relative', left: 8, bottom: 50}}
          />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    borderRadius: 29,
    overflow: 'hidden',
    marginTop: 24,
    marginBottom: 48
  },
  infoBox: {
    alignItems: 'center',
    position: 'relative',
    bottom: 490
  },
  
  infoText: {
    color: '#153a71',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

   botaoBox:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 250,
  }

});
