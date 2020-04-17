import React,{Component} from 'react'
import {
		View,
	} from 'react-native'
import styles from './styles'

import Button from '../Components/Button';
import GetName from '../Components/GetName';
import InputComponent from '../Components/InputComponent';

export default class Main extends Component{
	static navigationOptions = {
        title: '',
        header: null,
        gesturesEnabled: false
    };

    constructor(props){
    	super(props);
    	this.state = {
    		name:""
    	}
	}

	render(){
		return(
			<View style={styles.container}>
				<Button text="Navigate" 
						onPress={() => this.props.navigation.navigate('Test')} />

				<GetName text="Tanish" />
				<GetName text="Amit" />
				<GetName text="Kritika" />
				<GetName text="Anjali" />

				<InputComponent change={ (name) => {this.setState({name: name})}} 
								placeholder="Name"
								value={this.state.name} />

				<InputComponent change={ (name) => {this.setState({name: name})}} 
								placeholder="Age"
								value={this.state.name}
								number={true} />

				<InputComponent change={ (name) => {this.setState({name: name})}} 
								placeholder="Email"
								value={this.state.name} />

				<InputComponent change={ (name) => {this.setState({name: name})}} 
								placeholder="Password"
								password={true}
								value={this.state.name} />

			</View>
		);
	}
}