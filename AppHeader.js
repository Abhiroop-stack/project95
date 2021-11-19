import * as React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component{
render(){
  return(
      <View style={styles.container}>
     <Text style={styles.header}>Quiz Buzzer App</Text>
      </View>
  )
}

}

const styles = StyleSheet.create({
container:{
  backgroundColor:'blue',
  
},
header:{
  color:'white',
  fontWeight:'bold',
  fontSize:20,
  padding:30,
  textAlign:'CENTER'
}
})