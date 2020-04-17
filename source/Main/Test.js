import React,{Component} from 'react'
import {
		View,
		Text,
	} from 'react-native'
import styles from './styles'

export default class Main extends Component{
	static navigationOptions = {
        title: '',
        header: null,
        gesturesEnabled: false
    };

    constructor(props){
    	super(props);
    	this.state = {
    		
    	}
	}

	render(){
		return(
			<View style={styles.container}>
				<Text> Sample Screen</Text>
			</View>
		);
	}
}