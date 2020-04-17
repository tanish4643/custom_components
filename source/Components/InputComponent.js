import React, { Component } from 'react';
import { TextInput } from 'react-native';

const styles = {
    input:{
    	width:'100%',
    	backgroundColor:'#ddd',
    	borderWidth: 2,
    	borderColor:'#ccc',
    	borderRadius: 5,
    	paddingLeft: 15,
    	fontSize: 15,
    }
}

const InputComponent = (props) => {
  return (
    <TextInput 	onChangeText={(text) => props.change(text)}
    			placeholder={props.placeholder}
    			value={props.value} 
    			secureTextEntry={props.password}
    			keyboardType={props.number ? 'numeric' : 'default'}
    			style={styles.input}>
    </TextInput>
  )
}
export default InputComponent;
