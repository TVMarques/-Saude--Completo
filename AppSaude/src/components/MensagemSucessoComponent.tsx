import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function MensagemSucessoComponent({mensagem, estiloCard, estiloContainerText, estiloTexto})
{

const [fontsLoaded] = useFonts({
      'Rubik-SemiBold': require('../../assets/fonts/Rubik-SemiBold.ttf'),
      'Rubik-Bold': require('../../assets/fonts/Rubik-Bold.ttf'),
    });
  
     if (!fontsLoaded) {
      return null;
    }

  return (
    <View style={[styles.card, estiloCard]}>
      <View style={[styles.containerText, estiloContainerText]}>
        <Text style={[styles.text, estiloTexto]}>{mensagem}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#153A71',//'#0E5ED6',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 2,
    width: 370,
    height: 24,
    marginBottom: 560,
    marginLeft: 6,
  },
  containerText: {
    width: 365,
    height: 300,
    marginTop: 20,
    backgroundColor: '#f0f0f0',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  text: {
    textAlign: 'center',
    color: '#153A71',//'#0E5ED6',
    fontSize: 26,
    fontWeight: '600',
    marginTop: 90,
    fontFamily: 'Rubik-Bold',
  },
});