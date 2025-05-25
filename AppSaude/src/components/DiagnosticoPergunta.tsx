import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import TextInputComponent from '../components/TextInputComponent'; // ajuste o caminho conforme necessário

export default function DiagnosticoPergunta({ value, onChange, detailValue, onDetailChange }) {
  const [resposta, setResposta] = useState(value); // "sim" ou "nao"

  const handleResposta = (respostaSelecionada) => {
    setResposta(respostaSelecionada);
    onChange(respostaSelecionada);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pergunta}>1. Possui diagnóstico válido de transtorno ou condição médica?</Text>
      <View style={styles.botoesContainer}>
        <TouchableOpacity
          style={[styles.botao, resposta === 'sim' && styles.botaoSelecionado]}
          onPress={() => handleResposta('sim')}
        >
          <Text style={styles.textoBotao}>Sim</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.botao, resposta === 'nao' && styles.botaoSelecionado]}
          onPress={() => handleResposta('nao')}
        >
          <Text style={styles.textoBotao}>Não</Text>
        </TouchableOpacity>
      </View>

      {resposta === 'sim' && (
        <TextInputComponent
          rotulo="Caso sim, qual?"
          placeholder="Descreva aqui"
          value={detailValue}
          onChangeText={onDetailChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  pergunta: {
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 16,
  },
  botoesContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#ccc',
    padding: 10,
    marginRight: 10,
    borderRadius: 8,
  },
  botaoSelecionado: {
    backgroundColor: '#153A71',
  },
  textoBotao: {
    color: 'white',
  },
});