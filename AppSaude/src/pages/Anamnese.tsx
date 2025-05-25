import React, { useState } from 'react';
import { View, Text, TextInput, Modal, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import BotaoSaudeComponent from '../components/BotaoSaudeComponent';
import TextInputComponent from '../components/TextInputComponent';
import TituloSaudeComponent from '../components/TituloSaudeComponent';
import axios from 'axios';

import { useNavigation } from '@react-navigation/native';

const Question = ({ number, text, showFollowUp, followUpText, followUpValue, onValueChange, followUpPlaceholder }) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const handlePickerChange = (itemValue) => {
        setSelectedValue(itemValue);
        onValueChange(itemValue === 'Sim' ? '' : null);
        if (itemValue === 'Sim' && showFollowUp) {
            setModalVisible(true);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    {text}
                </Text>
            </View>

            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={handlePickerChange}
                    style={styles.picker}
                >
                    <Picker.Item label="Selecione" value="" />
                    <Picker.Item label="Sim" value="Sim" />
                    <Picker.Item label="Não" value="Não" />
                </Picker>
            </View>

            {showFollowUp && selectedValue === 'Sim' && (
                <TextInput
                    style={styles.textInput}
                    placeholder={followUpPlaceholder}
                    value={followUpValue}
                    onChangeText={onValueChange}
                />
            )}
        </View>


    );
};

export default function MedicalForm() {
    const [answers, setAnswers] = useState({});
    const navigation = useNavigation();

    const handleAnswerChange = (key, value) => {
        setAnswers((prev) => ({ ...prev, [key]: value }));
    };

    const handleNext = () => {
        console.log('Próximo passo:', answers);
    };

    return (
        <LinearGradient colors={['#79DDF3', '#5E845F']} style={styles.container1}>
            <ScrollView contentContainerStyle={{ padding: 20 }}>

                <TituloSaudeComponent
                    rotulo="NOVO CADASTRO"
                    containerStyle={{ position: 'relative', bottom: 60, paddingHorizontal: 6, paddingVertical: 4 }}
                    textStyle={{ widht: 80, fontSize: 17,  position: 'relative', left: 40}}
                />
                <TextInputComponent 
                   rotulo="Nome" 
                   value={answers.nome || ''}
                   onChangeText={(value) => handleAnswerChange('nome', value)}
                />
                <TextInputComponent 
                  rotulo="Endereço" 
                  value={answers.endereco || ''}
                  onChangeText={(value) => handleAnswerChange('endereco', value)}
                />
                <TextInputComponent 
                  rotulo="Número" 
                  value={answers.numero || ''}
                  onChangeText={(value) => handleAnswerChange('numero', value)}
                />
                <TextInputComponent 
                  rotulo="Complemento" 
                  value={answers.complemento || ''}
                  onChangeText={(value) => handleAnswerChange('complemento', value)}
                />
                <TextInputComponent 
                  rotulo="Bairro" 
                  value={answers.bairro || ''}
                  onChangeText={(value) => handleAnswerChange('bairro', value)}
                />
                <TextInputComponent 
                  rotulo="CEP"
                  value={answers.cep || ''}
                  onChangeText={(value) => handleAnswerChange('cep', value)} 
                />
                <TextInputComponent 
                  rotulo="Cidade" 
                  value={answers.cidade || ''}
                  onChangeText={(value) => handleAnswerChange('cidade', value)}
                />
                <TextInputComponent 
                  rotulo="UF" 
                  value={answers.uf || ''}
                  onChangeText={(value) => handleAnswerChange('uf', value)}
                />
                <TextInputComponent 
                  rotulo="Telefone" 
                  value={answers.telefone || ''}
                  onChangeText={(value) => handleAnswerChange('telefone', value)}
                />
                <TextInputComponent 
                  rotulo="E-Mail" 
                  value={answers.email || ''}
                  onChangeText={(value) => handleAnswerChange('email', value)}
                />
                <TextInputComponent 
                  rotulo="Data de Nascimento" 
                  value={answers.dataNascimento || ''}
                  onChangeText={(value) => handleAnswerChange('dataNascimento', value)}
                />
                <TextInputComponent 
                  rotulo="Sexo" 
                  value={answers.sexo || ''}
                  onChangeText={(value) => handleAnswerChange('sexo', value)}
                />
                <TextInputComponent 
                  rotulo="CPF" 
                  value={answers.cpf || ''}
                  onChangeText={(value) => handleAnswerChange('cpf', value)}
                />
                <TextInputComponent 
                  rotulo="Defina a Senha" 
                  value={answers.senha || ''}
                  onChangeText={(value) => handleAnswerChange('senha', value)}
                />
                <TextInputComponent 
                  rotulo="Confirme a Senha" 
                  value={answers.confirmacaoSenha || ''}
                  onChangeText={(value) => handleAnswerChange('confirmacaoSenha', value)}
                />

                <Question number={1} text="Possui diagnóstico válido de transtorno ou condição médica?" showFollowUp={true}
                    followUpText="Caso sim, qual?" followUpPlaceholder="Descreva aqui"
                    followUpValue={answers.q1_detail || ''}
                    onValueChange={(value) => handleAnswerChange('q1_detail', value)}
                />
                <Question number={2} text="Faz uso de medicação controlada?" showFollowUp={true}
                    followUpText="Caso sim, qual?" followUpPlaceholder="Descreva aqui"
                    followUpValue={answers.q2_detail || ''}
                    onValueChange={(value) => handleAnswerChange('q2_detail', value)}
                />
                <Question number={3} text="Passou por internação hospitalar nos últimos 12 meses?" showFollowUp={true}
                    followUpText="Caso sim, qual motivo?" followUpPlaceholder="Motivo"
                    followUpValue={answers.q3_detail || ''}
                    onValueChange={(value) => handleAnswerChange('q3_detail', value)}
                />
                <Question number={4} text="Já passou por procedimento cirúrgico?" showFollowUp={true}
                    followUpText="Caso sim, qual?" followUpPlaceholder="Descreva aqui"
                    followUpValue={answers.q4_detail || ''}
                    onValueChange={(value) => handleAnswerChange('q4_detail', value)}
                />
                <Question number={5} text="Possui histórico de diabetes na família?" showFollowUp={false}
                    onValueChange={(value) => handleAnswerChange('q5', value)}
                />
                <Question number={6} text="Possui histórico de transtorno mental na família?" showFollowUp={true}
                    followUpText="Caso sim, qual?" followUpPlaceholder="Descreva aqui"
                    followUpValue={answers.q6_detail || ''}
                    onValueChange={(value) => handleAnswerChange('q6_detail', value)}
                />
                <Question number={7} text="Possui histórico de doença cardiovascular na família?" showFollowUp={false}
                    onValueChange={(value) => handleAnswerChange('q7', value)}
                />
                <Question number={8} text="Possui histórico de câncer na família?" showFollowUp={false}
                    onValueChange={(value) => handleAnswerChange('q8', value)}
                />
                <Question number={9} text="Realizou exame laboratorial nos últimos 12 meses?" showFollowUp={true}
                    followUpText="Caso sim, qual?" followUpPlaceholder="Descreva aqui"
                    followUpValue={answers.q9_detail || ''}
                    onValueChange={(value) => handleAnswerChange('q9_detail', value)}
                />
                <Question number={10} text="Possui alergia a algum medicamento?" showFollowUp={true}
                    followUpText="Caso sim, qual?" followUpPlaceholder="Descreva aqui"
                    followUpValue={answers.q10_detail || ''}
                    onValueChange={(value) => handleAnswerChange('q10_detail', value)}
                />

                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Por favor insira:</Text>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Peso Atual (KG)</Text>
                        <TextInput
                            keyboardType="numeric"
                            placeholder="Ex: 70"
                             placeholderTextColor='#153A71'
                            style={styles.input}
                            value={answers.weight || ''}
                            onChangeText={(value) => handleAnswerChange('weight', value)}
                        />
                    </View>

                    <View style={styles.separator} />

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>Altura</Text>
                        <TextInput
                            keyboardType="numeric"
                            placeholder="Ex: 175"
                            placeholderTextColor='#153A71'
                            style={styles.input}
                            value={answers.height || ''}
                            onChangeText={(value) => handleAnswerChange('height', value)}
                        />
                    </View>
                </View>

                <View style={styles.buttonRow}>
                    <View style={{ flex: 1, marginRight: 5 }}>
                        <BotaoSaudeComponent
                            rotulo="Voltar"
                            onPress={() => navigation.goBack()}
                            estiloContainer={styles.btnVoltar}
                            estiloTexto={styles.btnText}
                        />
                    </View>
                    <View style={{ flex: 1, marginLeft: 5 }}>
                        <BotaoSaudeComponent
                            rotulo="Registrar"
                            //onPress={() => navigation.navigate('Opcoes')}
                            onPress={async () => {
                                try {
                                    const response = await axios.post('http://192.168.18.20:3000/usuario', {
                                    nome: answers.nome,
                                    endereco: answers.endereco,
                                    numero: answers.numero,
                                    complemento: answers.complemento,
                                    bairro: answers.bairro,
                                    cep: answers.cep,
                                    cidade: answers.cidade,
                                    uf: answers.uf,
                                    telefone: answers.telefone,
                                    email: answers.email,
                                    dataNascimento: answers.dataNascimento,
                                    sexo: answers.sexo,
                                    cpf: answers.cpf,
                                    senha: answers.senha,
                                    confirmacaoSenha: answers.confirmacaoSenha,
                                    peso: answers.weight,
                                    altura: answers.height,
                                    q1_detail: answers.q1_detail,
                                    q2_detail: answers.q2_detail,
                                    q3_detail: answers.q3_detail,
                                    q4_detail: answers.q4_detail,
                                    q5: answers.q5,
                                    q6_detail: answers.q6_detail,
                                    q7: answers.q7,
                                    q8: answers.q8,
                                    q9_detail: answers.q9_detail,
                                    q10_detail: answers.q10_detail,
                                    });

                                    console.log('Usuário registrado com sucesso!', response.data);
                                    navigation.navigate('Opcoes');
                                } catch (error) {
                                    console.error('Erro ao registrar usuário:', error);
                                }
                                }}
                            estiloContainer={styles.btnAgendar}
                            estiloTexto={styles.btnText}
                        />
                    </View>
                </View>
            </ScrollView>
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

    container: {
        marginBottom: 20,
        borderRadius: 10,
        overflow: 'hidden',
    },
    header: {
        backgroundColor: '#153A71', // azul escuro
        padding: 2,
        height: 22
    },

    headerText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
    },

    pickerContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 1,
        height: 40
    },

    picker: {
        color: '#153A71', // azul escuro
        fontWeight: 'bold',
        marginLeft: -16,
        width: 360
    },

   separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#153A71',
    },

    inputGroup: {
        backgroundColor: '#fff'
    },

    label:{
        color: '#153A71',
        fontSize: 16,
    },

    textInput: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        marginTop: 10,
    },

    buttonRow: {
        flexDirection: 'row',
        gap: 100,
        position: 'relative',
        top: 20
    },
});
