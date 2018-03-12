import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import {Actions} from 'react-native-router-flux'

export default class New_home extends Component{
  render() {
    return (
    //<KeyboardAwareScrollView ref="scroll" style={{backgroundColor:'white'}}>
      <View style={styles.container}>

        <View style={{flex:0.13,backgroundColor:'rgb(68, 35, 124)',flexDirection:'row'}}>
          <View style={{flex:0.8}}>
            <Text style={{ fontFamily:"FaktProSoft",fontSize: 22,textAlign:'right', color:'white',padding:26}}>Create a new Home</Text>
          </View>
          <View style={{flex:0.2}}>
              <Icon name='times' style={{color:'white', fontSize:20,padding:28,marginTop:3}} onPress={()=>Actions.popTo('Create_profile')}/>
          </View>
        </View>

        <View style={{flex:0.28 ,marginTop:20,flexDirection:'column'}}>
              <View style={{flex:0.13}}>
                  <Text style={{fontFamily:"FaktProSoft",fontSize: 19,fontWeight:'bold',textAlign:'center', color:'rgb(68, 35, 124)'}}>Housemates</Text>
              </View>
              <View style={{flex:0.13}}>
                <Text style={{fontFamily:"FaktProSoft",fontSize: 15.5,textAlign:'center', color:'gray',padding:7}}>Tell us who you live with</Text>
              </View>
              <View style={{flex:0.74,backgroundColor:'#f7f6f6',marginTop:10}}>
                <TouchableHighlight>
                  <Image source={require('../Images/tellus.png')} style={{height:height*0.18,width:width,resizeMode:'stretch',position:'relative'}}  />
                </TouchableHighlight>
                <Icon name='plus' style={{color:'rgb(68, 35, 124)', fontSize:30,position:'absolute',marginLeft:width*0.8205,marginTop:height*0.105}}  onPress={()=>Actions.Add_person()}/>
              </View>
        </View>

        <View style={{flex:0.59,flexDirection:'column',marginTop:15}}>
          <View style={{flex:0.3,flexDirection:'row'}}>
            <View style={{flex:0.065}}></View>
            <View style={{flex:0.273,borderRadius:100,backgroundColor:'#f7f6f6'}}>
              <Image source={require('../Images/circle2.jpeg')} style={{resizeMode:'stretch',height:height*0.16,width:width*0.273,borderRadius:100}}/>
            </View>
            <View style={{flex:0.025}}></View>
            <View style={{flex:0.273,borderRadius:100,backgroundColor:'#f7f6f6'}}>
                <Image source={require('../Images/circle4.jpeg')} style={{resizeMode:'cover',height:height*0.16,width:width*0.273,borderRadius:100}}/>
                {/*<Icon name='plus' style={{color:'gray', fontSize:40,padding:36,marginLeft:3}}/>*/}
            </View>
            <View style={{flex:0.025}}></View>
            <View style={{flex:0.273,borderRadius:100,backgroundColor:'#f7f6f6',position:'relative'}}>
                <Icon name='plus' style={{color:'gray', fontSize:40,padding:20,marginLeft:width*0.04,position:'absolute',marginTop:height*0.023}} onPress={()=>Actions.Add_person()}/>
            </View>
            <View style={{flex:0.065}}></View>
          </View>
          <View style={{flex:0.1,flexDirection:'row'}}>
            <View style={{flex:0.3}}><Text style={{fontFamily:"FaktProSoft",fontSize:15,textAlign:'center',marginLeft:width*0.1, color:'rgb(68, 35, 124)',padding:8}}>Paul</Text></View>
            <View style={{flex:0.3}}><Text style={{fontFamily:"FaktProSoft",fontSize:15,textAlign:'center',marginLeft:width*0.1, color:'rgb(68, 35, 124)',padding:8}}>Neha</Text></View>
            <View style={{flex:0.3}}></View>
          </View>
          <View style={{flex:0.3,flexDirection:'row'}}>

            <View style={{flex:0.065}}></View>
            <View style={{flex:0.273,borderRadius:100,backgroundColor:'#f7f6f6'}}></View>
            <View style={{flex:0.025}}></View>
            <View style={{flex:0.273,borderRadius:100,backgroundColor:'#f7f6f6'}}></View>
            <View style={{flex:0.025}}></View>
            <View style={{flex:0.273,borderRadius:100,backgroundColor:'#f7f6f6'}}></View>
            <View style={{flex:0.065}}></View>

          </View>
          <View style={{flex:0.05}}></View>
          <View style={{flex:0.25,flexDirection:'row'}}>
            <View style={{flex:0.4}}></View>
            <View style={{flex:0.3}}></View>
            <View style={{flex:0.3}}>
              <Icon name='check-circle' style={{color:'#43b4e5', fontSize:80,marginLeft:25}} onPress={()=>Actions.Rooms()}/>
            </View>
          </View>
        </View>

      </View>
    // </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
     justifyContent: 'center',
     backgroundColor:'white',
    //backgroundColor: '#F5FCFF',
  },
});
