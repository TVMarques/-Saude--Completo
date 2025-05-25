import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function AjudaSuporte({navigation}) {
  return (
    <LinearGradient colors={['#79DDF3', '#5E845F']} style={styles.background}>
      <View style={styles.container}>
    
        <View style={[styles.header, { flexDirection: 'row', alignItems: 'center' }]}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>AJUDA E SUPORTE</Text>
          </View>
        </View>

        <View style={styles.box}>
          {/* Faixa azul no topo da caixa */}
          <View style={styles.blueBar} />

          {/* Telefones */}
          <View style={styles.row}>
            <Image source={require('../../assets/images/Suporte2.png')} style={styles.iconLarge} />
            <View style={styles.textGroup}>
              <Text style={styles.textBlue}>
                Telefone + SAÚDE - <Text style={styles.textBlueNumber}>5555-5555</Text>
              </Text>
              <Text style={styles.textBlue}>
                Telefone HOSPITAL - <Text style={styles.textBlueNumber}>5555-5555</Text>
              </Text>
              <Text style={styles.textBlue}>
                Telefone CLÍNICA - <Text style={styles.textBlueNumber}>5555-5555</Text>
              </Text>
            </View>
          </View>

          {/* Chat, WhatsApp e e-mail */}
          <View style={[styles.row, { marginTop: 30 }]}>
            <Image source={require('../../assets/images/Suporte2.png')} style={styles.iconLarge} />
            <View style={styles.textGroup}>
              <Text style={styles.textLine}>
                <Text style={styles.textBlue}>Chat + SAÚDE</Text> - <Text style={styles.textGreen}>clique aqui</Text>
              </Text>
              <Text style={styles.textLine}>
                <Text style={styles.textBlue}>Whatsapp + SAÚDE</Text> - <Text style={styles.textGreen}>95555-5555</Text>
              </Text>
              <Text style={styles.textLine}>
                <Text style={styles.textBlue}>e-mail + SAÚDE:</Text>{'\n'}
                <Text style={styles.textGreen}>maissaude@maissaude.com.br</Text>
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
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
  container: {
    alignItems: 'center',
    paddingVertical: 40,
  },

  header: {
    marginBottom: 20,
    marginTop: 20,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  titleContainer: {
    backgroundColor: '#246536',
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 8,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  box: {
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    padding: 24,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop: 20,
  },
  blueBar: {
    height: 25,
    backgroundColor: '#153A71',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -24,
    marginHorizontal: -24,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
  },
  iconLarge: {
    width: 60,
    height: 100,
    marginRight: 20,
    resizeMode: 'contain',
  },
  textGroup: {
    flex: 1,
    flexShrink: 1,
    marginBottom:5
  },
  textBlue: {
    color: '#153A71',
    fontWeight: 'bold',
    fontSize: 15,
  },
  textBlueNumber: {
    color: '#153A71',
    fontWeight: 'bold',
    fontSize: 13,
  },
  textGreen: {
    color: '#246536',
    fontWeight: 'bold',
    fontSize: 13,
  },
  textLine: {
    marginBottom: 3,
    flexWrap: 'nowrap',
  },
  button: {
    height: 31,
    marginTop: 30,
    backgroundColor: '#256D1B',
    paddingVertical: 4,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
