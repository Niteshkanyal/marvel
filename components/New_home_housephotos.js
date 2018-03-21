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

export default class New_home_housephotos extends Component{
  render() {
    return (
      <View style={styles.container}>

        <View style={{flex:0.13,backgroundColor:'rgb(68, 35, 124)',flexDirection:'row'}}>
          <View style={{flex:0.8}}>
            <Text style={{ fontFamily:"times new roman",fontSize: 22,textAlign:'right', color:'white',padding:26}}>Create a new Home</Text>
          </View>
          <View style={{flex:0.2}}>
              <Icon name='times' style={{color:'white', fontSize:20,padding:28,marginTop:3}} onPress={()=>Actions.popTo('New_home_housemates')}/>
          </View>
        </View>

        <View style={{flex:0.28 ,marginTop:20,flexDirection:'column'}}>
              <View style={{flex:0.13}}>
                  <Text style={{fontFamily:"times new roman",fontSize: 19,fontWeight:'bold',textAlign:'center', color:'rgb(68, 35, 124)'}}>House photos</Text>
              </View>
              <View style={{flex:0.13}}>
                <Text style={{fontFamily:"times new roman",fontSize: 15.5,textAlign:'center', color:'gray',padding:7}}>Show us your home and lovely faces</Text>
              </View>
              <View style={{flex:0.74,backgroundColor:'#f7f6f6',marginTop:10}}>
                <TouchableHighlight>
                  <Image source={require('../Images/house_photos.png')} style={{height:height*0.183,width:width,resizeMode:'stretch',position:'relative'}}  />
                </TouchableHighlight>
                <Icon name='plus' style={{color:'rgb(68, 35, 124)', fontSize:30,position:'absolute',marginLeft:width*0.824,marginTop:height*0.107}}/>
              </View>
        </View>

        <View style={{flex:0.59,flexDirection:'column'}}>

          <View style={{flex:0.05}}></View>
          <View style={{flex:0.6,flexDirection:'row'}}>
            <View style={{flex:0.35}}></View>
            <View style={{flex:0.4,flexDirection:'column'}}>
              <View style={{flex:0.3}}></View>
              <View style={{flex:0.5}}>
                <TouchableOpacity>
                  <Image source={require('../Images/real.png')} style={{height:height*0.18,width:width*0.4,resizeMode:'stretch',position:'relative'}}  />
                </TouchableOpacity>
              </View>
              <View style={{flex:0.2}}></View>
            </View>
            <View style={{flex:0.15}}></View>
          </View>
          <View style={{flex:0.05}}></View>
          <View style={{flex:0.3,flexDirection:'row'}}>
            <View style={{flex:0.3}}>
              <Icon name='circle' style={{color:'rgb(68, 35, 124)', fontSize:80,marginLeft:width*0.07,position:'relative',marginTop:height*0.02}}/>
              <Icon name='arrow-left' style={{color:'white', fontSize:40,marginLeft:width*0.12,position:'absolute',marginTop:height*0.049}} onPress={()=>Actions.popTo('Short_bio')}/>
            </View>
            <View style={{flex:0.4}}></View>
            <View style={{flex:0.3}}>
              <Icon name='check-circle' style={{color:'#fbf1f1', fontSize:80,marginLeft:width*0.05,marginTop:height*0.02}} onPress={()=>Actions.Location()}/>
            </View>
          </View>
        </View>
      </View>
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
