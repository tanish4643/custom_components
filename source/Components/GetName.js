import React, { Component } from 'react';
import { View, Text } from 'react-native';

const styles = {
    view:{
    	width:'100%',
    	backgroundColor:'#DD5246',
    	padding: 15,
    	paddingTop: 8,
    	paddingBottom:8,
    	borderRadius: 5,
    },
    text:{
        color:'white',
        fontSize: 18
    }
}

const GetName = (props) => {
  return (
    <View style={styles.view}>
    	<Text style={styles.text}>{props.text}</Text>
    </View>
  )
}
export default GetName;
