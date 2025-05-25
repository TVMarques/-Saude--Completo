import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import TextInputComponent from '../components/TextInputComponent';
import BotaoSaudeComponent from '../components/BotaoSaudeComponent';



export default function LoginScreen({navigation}) {
  return (
    <LinearGradient colors={['#79DDF3', '#5E845F']} style={styles.container1}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        keyboardVerticalOffset={60} // ajuste conforme seu layout
      >

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
          >
              <View style={styles.container}>
                  <Image 
                    source={require('../../assets/images/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                  />

                  <Text style={styles.title}>+SAÚDE</Text>
                  <TextInputComponent
                      rotulo='LOGIN'
                  />
                  <TextInputComponent
                      rotulo='SENHA' 
                    secureTextEntry={true}
                  /> 

                  <BotaoSaudeComponent
                      rotulo='Entrar'//Coloque titulo pois o é !!
                      onPress={() => navigation.navigate('Opcoes')}
                  />

                  <BotaoSaudeComponent
                      rotulo='Não é cadastrado? Clique aqui'
                      onPress={() => navigation.navigate('Anamnese')}
                  />
                </View>
           </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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

  scrollContainer: {
    flexGrow: 1
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    marginTop: 65
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 80,
  },

  title: {
    fontSize: 54,
    fontWeight: 'bold',
    color: '#ffffff',
    position: 'relative',
    bottom: 80
  },
});