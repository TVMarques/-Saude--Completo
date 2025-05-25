import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TituloSaudeComponent from '../components/TituloSaudeComponent';
import BotaoSaudeComponent from '../components/BotaoSaudeComponent';
import BotaoImagemComponent from '../components/BotaoImagemComponent';

export default function InfomacoesDicasScreen({ navigation }) {
  const handlePress = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Failed to open page:", err));
  };

  const cards = [
    {
      image: require('../../assets/images/doencas.png'),
      url: 'https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/doencas-diarreicas-agudas/doencas-infecciosas-e-parasitarias_-guia-de-bolso.pdf/view'
    },
    {
      image: require('../../assets/images/vacinas.png'),
      url: 'https://www.gov.br/saude/pt-br/campanhas-da-saude/vacinacao'
    },
    {
      image: require('../../assets/images/saude mental.png'),
      url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-mental'
    },
    {
      image: require('../../assets/images/Gravidez.png'),
      url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/g/gravidez/pre-natal'
    },
    {
      image: require('../../assets/images/Alimentacao.png'),
      url: 'https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/s/saude-da-crianca/primeira-infancia/alimentacao-saudavel'
    },
    {
      image: require('../../assets/images/Bem estar.png'),
      url: 'https://www.gov.br/servidor/pt-br/assuntos/contecomigo/paginas/paginas-dos-hyperlinks/bem-estar-e-saude-1'
    },
  ];

  return (
    <LinearGradient colors={['#79DDF3', '#5E845F']} style={styles.container1}>
      <TituloSaudeComponent
        rotulo='INFORMAÇÕES E DICAS DE SAÚDE'
          containerStyle={{position:'relative', bottom: 60, paddingHorizontal: 6, paddingVertical: 4,}}//Usando a props para mexer no estilo do componente
          textStyle={{fontSize: 14}}
      />

      {/* Organiza os botões em duas linhas */}
      <View style={styles.botaoBox}>
        {cards.slice(0, 3).map((card, index) => (
          <BotaoImagemComponent
            key={index}
            imageSource={card.image}
            onPress={() => handlePress(card.url)}
          />
        ))}
      </View>

      <View style={styles.botaoBox}>
        {cards.slice(3, 6).map((card, index) => (
          <BotaoImagemComponent
            key={index + 3}
            imageSource={card.image}
            onPress={() => handlePress(card.url)}
          />
        ))}
      </View>

      <BotaoSaudeComponent
        rotulo='Voltar'
        onPress={() => navigation.goBack()}
        estiloContainer={{ width: 95, marginLeft: 145, marginTop: 40, }}
        estiloTexto={{fontSize: 16, paddingVertical: 4}}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    borderRadius: 29,
    overflow: 'hidden',
    marginTop: 24,
    marginBottom: 48
  },
  botaoBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  }
});