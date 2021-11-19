import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import AppHeader from '../AppHeader'
import db from '../config'

export default class HomeScreen extends React.Component {
  constructor(){
    super();
    this.state={
      redStatus:true,
      blueStatus:true,
      greenStatus:true,
      yellowStatus:true
    }
  }

  goToBuzzerScreen=(buttonColor)=> {
    var teamRef = db.ref("teams/"+buttonColor)
    teamRef.update({
      enabled:false
    })
      this.props.navigation.navigate('BuzzerScreen',{color:buttonColor})
    }

    componentDidMount(){
       var teamsRef= db.ref("teams")
       teamsRef.on("value",data=>{
             var teamDetails = data.val();
             this.state({
               redStatus:teamDetails.red.enabled,
               blueStatus:teamDetails.blue.enabled,
               greenStatus:teamDetails.green.enabled,
               yellowStatus:teamDetails.yellow.enabled
             })          
         })         
       }

  render(){
    return(
      <View style={styles.container}>
        <AppHeader/>
          <TouchableOpacity 
            disabled={!this.state.greenStatus}
            style={[styles.button,{backgroundColor:'green'}]} 
            onPress={()=>{
              this.goToBuzzerScreen('green')}}>
            <Text style={styles.buttonText}>Team1</Text>
          </TouchableOpacity>

            <TouchableOpacity 
            disabled={!this.state.blueStatus}
            style={[styles.button,{backgroundColor:'blue'}]} 
            onPress={()=>{
              this.goToBuzzerScreen('blue')}}>
            <Text style={styles.buttonText}>Team2</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            disabled={!this.state.redStatus}
            style={[styles.button,{backgroundColor:'red'}]} 
            onPress={()=>{
              this.goToBuzzerScreen('red')}}>
            <Text style={styles.buttonText}>Team3</Text>
          </TouchableOpacity>

             <TouchableOpacity 
             disabled={!this.state.yellowStatus}
            style={[styles.button,{backgroundColor:'yellow'}]} 
            onPress={()=>{
              this.goToBuzzerScreen('yellow')}}>
            <Text style={styles.buttonText}>Team4</Text>
          </TouchableOpacity>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    backgroundColor:"indigo"
  },
  button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius:20,
    width : 200,
    height:50,
    backgroundColor:'green',
    marginTop:50
  },
  buttonText : {
    textAlign : 'center',
    color : 'white'
  }
})