import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function BotaoSaudeComponent({ rotulo, onPress, estiloContainer, estiloTexto, disabled }) {
  const [fontsLoaded] = useFonts({
    'Rubik-SemiBold': require('../../assets/fonts/Rubik-SemiBold.ttf'),
    'Rubik-Bold': require('../../assets/fonts/Rubik-Bold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <TouchableOpacity style={[styles.loginButton, estiloContainer]} onPress={onPress} disabled={disabled} >
      <Text style={[styles.loginButtonText, estiloTexto, {fontFamily: 'Rubik-SemiBold'}]}>{rotulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#256D1B',
    paddingVertical: 1,
    borderRadius: 32,
    width: '100%',
    height: 31,
    alignItems: 'center',
    marginBottom: 18,
  },

  loginButtonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});