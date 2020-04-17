import {Dimensions} from 'react-native'
const {height,width} = Dimensions.get('window');

export default styles = {
	container:{
		flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        padding: height/20
	},
}