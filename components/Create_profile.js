import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import {Actions} from 'react-native-router-flux'

export default class Create_profile extends Component{
  render() {
    return (
      <View style={{flex:1,flexDirection:'column'}}>
        <View style={{flex:0.13,backgroundColor:'rgb(68, 35, 124)'}}>
          <Text style={{fontSize:23,textAlign: 'center', color:'white',padding:25}}>Create a profile</Text>
        </View>
        <View style={{flex:0.03}}></View>
        <View style={{flex:0.74,flexDirection:'column'}}>
          <View style={{flex:0.48,flexDirection:'row'}}>
              <View style={{flex:0.05}}></View>
              <View style={{flex:0.9}}>
                <TouchableOpacity style={{flex:1}} onPress={()=>Actions.New_home_housemates()}>
                  <Image source={require('../Images/one.png')} style={{height:height*0.34,width:width*0.9,borderRadius:5}}resizeMode= "stretch"/>
                </TouchableOpacity>
              </View>
              <View style={{flex:0.05}}></View>
          </View>
          <View style={{flex:0.04}}></View>
          <View style={{flex:0.48,flexDirection:'row'}}>
              <View style={{flex:0.05}}></View>
              <View style={{flex:0.9}}>
                <TouchableOpacity>
                  <Image source={require('../Images/two.png')} style={{height:height*0.35,width:width*0.9,resizeMode: "stretch",borderRadius:5}}/>
                </TouchableOpacity>
              </View>
              <View style={{flex:0.05}}></View>
          </View>
        </View>
        <View style={{flex:0.1  ,justifyContent: 'center',  alignItems: 'center'}}>
          <Text style={{fontSize: 20,textAlign: 'center', color:'gray',padding:10}}>Skip & browse</Text>
         </View>
      </View>
    )
  }
}
