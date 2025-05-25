import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default function TituloSaudeComponent(props) {
    return (
        <View style={[styles.container, props.containerStyle]}>{/*Com o props no estilo, pode-se mexer no componente na página */}
            <View>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={styles.image}
                />
            </View>

            <View style={styles.containerText}>
                <Text style={[styles.text, props.textStyle]}>
                    {props.rotulo}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 101,
        
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
    },

    image: {
        width: 70,
        height: 70,
        resizeMode: 'contain'
    },

    containerText: {
        backgroundColor: '#246536',
        justifyContent: 'center',
        borderRadius: 15,
        height: 30,
        width: 290,
        paddingLeft: 24,
        paddingEnd: 24,
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10  
    }
})