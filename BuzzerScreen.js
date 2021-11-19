import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../AppHeader'
import SoundButton from '../soundButton'
import ResultScreen from './ResultScreen'

export default class BuzzerScreen extends React.Component {

  goToResult=()=>{
      this.props.navigation.navigate('ResultScreen')
  }

  render(){
    return(
      <View>
        <AppHeader/>
        <SoundButton 
        color={this.props.navigation.getParam('color')}/>

        <TouchableOpacity style={styles.container} onPress={this.goToResult}>
          <Text>Check the results😱</Text>
        </TouchableOpacity>

        <Text style={styles.text}>Click the button fast to become first☝️ </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
text:{
  marginTop:100,
  marginLeft:70,
  fontWeight:'bold'
},
container:{
    backgroundColor:"white",
    alignItems:'center'
}
})