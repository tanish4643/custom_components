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
    		name:"",
		age:"",
		email:"",
		password:"'
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

				<InputComponent change={ (name) => {this.setState({age: age})}} 
								placeholder="Age"
								value={this.state.age}
								number={true} />

				<InputComponent change={ (name) => {this.setState({email: email})}} 
								placeholder="Email"
								value={this.state.email} />

				<InputComponent change={ (name) => {this.setState({password: password})}} 
								placeholder="Password"
								password={true}
								value={this.state.password} />

			</View>
		);
	}
}
