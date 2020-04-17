import React,{Component} from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Main from './Main'
import Test from './Main/Test'

const AppNavigator = createStackNavigator({
	Main: {screen: Main},
	Test: {screen: Test}
});

class AppWithNavigationState extends Component{
	render(){
		return(
			<AppNavigator />
		);
	}
}

export default createAppContainer(AppNavigator);