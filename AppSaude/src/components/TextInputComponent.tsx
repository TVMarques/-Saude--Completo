import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
 

export default function TextInputComponent(props){
    return(
         <View style={styles.inputContainer}>
            <Text style={styles.label}>{props.rotulo}</Text>
            <TextInput style={styles.input} {...props}/>
        </View>
    );
}

const styles = StyleSheet.create({
inputContainer: {
    width: '100%',
},

label: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 1,
    paddingLeft: 4,
    backgroundColor: '#153A71',
    width: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },

  input: {
    backgroundColor: '#F0F0F0',
    width: '99%',
    marginLeft: 2,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
})
 


