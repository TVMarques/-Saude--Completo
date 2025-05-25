import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import TituloSaudeComponent from '../components/TituloSaudeComponent';
import BotaoSaudeComponent from '../components/BotaoSaudeComponent';
import MensagemSucessoComponent from '../components/MensagemSucessoComponent';

const { width, height } = Dimensions.get('window');

type RootStackParamList = {
  Home: undefined;
  TelaDesejaExcluir: undefined;
  TelaExcluidoSucesso: undefined;
};

export default function TelaExcluidoSucesso() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  let mensagem = 'Dados excluídos com sucesso!'

  const [shapes] = useState([
    { top: height * 0.08, left: width * 0.24, width: width * 0.7, height: height * 0.040, backgroundColor: '#246536', borderRadius: 100 },
    { top: height * 0.7, left: width * 0.3, width: width * 0.4, height: height * 0.040, backgroundColor: '#246536', borderRadius: 100 },
  ]);

  return (
    <LinearGradient colors={['#79dcf1', '#5e8561']} style={styles.background}>
      <TituloSaudeComponent 
        rotulo="Excluir dados cadastrais" 
        containerStyle={{ marginTop: -46 }} 
        textStyle={{ fontSize: 19, marginLeft: 22 }}
      />

        <View style={styles.infoBox}>
            <MensagemSucessoComponent
              mensagem={mensagem}
              estiloCard={{width: 309}}
              estiloContainerText={{height: 138, width: 306}}
              estiloTexto={{fontFamily: 'Rubik-SemiBold', fontSize: 24, width: 288, height: 61, position: 'relative', left: 8, bottom: 50}}
            />
       </View>

      {/* Botão Voltar */}
      <BotaoSaudeComponent 
        rotulo="Voltar" 
        estiloContainer={{ width: 95, height: 29, position: 'relative ', bottom: 185, left: 150 }}
        estiloTexto={{ fontSize: 18, paddingVertical: 2 }}
        onPress={() => navigation.navigate('Login')}
      />
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
    top: 40
  },
  
  shape: {
    position: 'absolute',
    zIndex: 1,
    elevation: 1,
  },
});