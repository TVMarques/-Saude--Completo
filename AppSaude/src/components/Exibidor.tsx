import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type OpcaoSeletor = {

    rotulo: string;
    valor: string;
};

type PropsSeletor = {
    titulo: string;
    opcoes: OpcaoSeletor[];
};

export default function Exibidor({ opcoes, titulo }: PropsSeletor) {
    const [aberto, setAberto] = useState(false);

    return (
        <View style={styles.container}>
            <View style={styles.containerTitulo}>
                <Text style={styles.tituloTexto}>
                    {titulo}
                </Text>
            </View>

            <View>
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={() => setAberto(!aberto)}
                >

                    <View style={styles.iconCircle2}>
                        <Icon name="arrow-drop-down" size={22} color="#246536" />
                    </View>
                    
                    {aberto && (
                    <View>
                        {opcoes.map((opcao) => (
                            <View key={opcao.valor} style={styles.item}>
                                <Text style={styles.rotulo}>{opcao.rotulo}</Text>
                            </View>
                        ))}
                    </View>
                )}
                </TouchableOpacity>


                

            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        marginInline: 20,
        overflow: 'hidden',
    },

    containerTitulo: {
        borderTopRightRadius: 70,
        borderTopLeftRadius: 70,
        backgroundColor: '#153A71',
        paddingInline: 6,
    },

    
    touchable: {
        backgroundColor: '#fff',
        paddingInline: 16,
        paddingBlock: 6,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    tituloTexto: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 4
    },

    iconCircle2: {
        width: 24,
        height: 22,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#246536',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginLeft: 298
    },

    item: {
        marginBottom: 4,
    },
    rotulo: {
        fontWeight: 'bold',
        color: '#153A71',
    },
});