import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import TituloSaudeComponent from '../components/TituloSaudeComponent';
import BotaoSaudeComponent from '../components/BotaoSaudeComponent';

type RootStackParamList = {
  Home: undefined;
  Excluir: undefined;
  TelaDesejaExcluir: undefined; 
  TelaExcluidoSucesso: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

export default function EditarEExcluirScreen() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <LinearGradient colors={['#79dcf1', '#5e8561']} style={styles.container}>
      
      {/* Título com logo e texto */}
      <TituloSaudeComponent 
        rotulo="O que deseja fazer?" 
        containerStyle={{ marginTop: -46 }} 
        textStyle={{fontSize: 22, marginLeft: 28}}
      />

        <View style={styles.containerBotoes}>
        {/* Botão Excluir */}
        <TouchableOpacity onPress={() => navigation.navigate('TelaDesejaExcluir')}>
          <Image
            source={require('../../assets/images/Excluir.png')} // imagem de excluir
            style={styles.imageBotao}
          />
        </TouchableOpacity>

        {/* Botão Editar */}
        <TouchableOpacity onPress={() => navigation.navigate('Anamnese')}>
          <Image
            source={require('../../assets/images/Editar.png')} // imagem de editar
            style={styles.imageBotao}
          />
        </TouchableOpacity>
      </View>

    
        <BotaoSaudeComponent 
          rotulo="Voltar" 
          estiloContainer={{width: 95, height: 29, marginTop: 155, marginLeft: 150 }}
          estiloTexto={{fontSize: 18, paddingVertical: 2}}
          onPress={() => navigation.goBack()} 
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

  imageBotao: {
    width: 180,
    height: 110,
    resizeMode: 'contain',
  },

  containerBotoes: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '100%',
  marginTop: 80,
  paddingHorizontal: 20,
},

botaoOpcao: {
  alignItems: 'center',
  width: 140,
},

labelBox: {
  backgroundColor: '#1d3b73',
  paddingVertical: 4,
  paddingHorizontal: 8,
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  marginBottom: 4,
},
});
