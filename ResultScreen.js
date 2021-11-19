import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import db from '../config'

export default class ResultScreen extends Component {
  constructor(){
   super();
   this.state={
     teamRank:[]
  }
  }

showTeamsRank=()=>{
  var teams = []
   var teamRef = db.ref('teams/');
   teamRef.on("value",(data)=>{
     var teamList = data.val();
     console.log(teamList)
     for(var team in teamList){
       if(teamList[team]['isButtonPressed']===true){
         teamList[team]['teamName'] = team
         teams.push(teamList[team])
       }
     }
     teams.sort(function(team1,team2){
       return team1.timeStamp-team2.timeStamp
     })
     this.setState({
       teamRank:teams
     })
     teams=[];
   })

}

resetDb = () => {
    var restDatabase = db.ref('teams/').set({
      red: {
        isButtonPressed: false,
        timeStamp: 0,
        enabled:true
      },
      green: {
        isButtonPressed: false,
        timeStamp: 0,
        enabled:true
      },
      blue: {
        isButtonPressed: false,
        timeStamp: 0,
        enabled:true
      },
      yellow: {
        isButtonPressed: false,
        timeStamp: 0,
        enabled:true
      },
    });
    this.setState({ teamRank: [] });
  };

  componentDidMount() {
    this.showTeamsRank();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {this.state.teamRank.map((team) => (
            <View
              style={{
                width: 140,
                height: 55,
                borderWidth: 2,
                margin: 5,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: team.teamName,
              }}>
              <Text>{team.teamName.toUpperCase()}</Text>
            </View>
          ))}
        </View>
        <Button
          title="RESET"
          style={{ width: 100, height: 100 }}
          onPress={this.resetDb}
        />

        <Text>The team on top is the first team to press the buzzer</Text>
      </View>
    );
  }
}

