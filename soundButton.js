import * as React from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';
import db from './config';
import firebase from 'firebase';

export default class SoundButton extends React.Component{

soundButton = async()=>{
   await Audio.Sound.createAsync(
     {uri:'https://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
     {shouldPlay:true}
   )
}

isButtonPressed(buzzerColor){
     
     var team = db.ref('teams/'+buzzerColor+'/')
     team.update({
       'isButtonPressed':true,
       'timeStamp':firebase.database.ServerValue.TIMESTAMP    })
}


render(){
  return(

    

   <TouchableOpacity style={[styles.button,{backgroundColor:this.props.color}]} 
   onPress={()=>{
     var buzzerColor=this.props.color
     this.isButtonPressed(buzzerColor)
     this.soundButton()
     }}>
     <Text style={styles.text}>Press Me</Text>
   </TouchableOpacity>   

  )
}
  
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:'red',
    width:200,
    height:200,
    borderRadius:100,
    marginLeft:80,
    alignItems:'center',
    justifyContent:"center",
    marginTop:100
  },
  text:{
      textAlign:'center',
      fontSize:20,
      fontWeight:'bold',
  }
})
 
