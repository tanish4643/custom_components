import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

const styles = {
    button:{
        backgroundColor:'#00B0EC',
        padding: 15,
        width: '40%',
        borderRadius: 40,
        alignItems:'center',
    },
    text:{
        color:'white',
        fontSize: 18
    }
}

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.button}>
        <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  )
}
export default Button;
