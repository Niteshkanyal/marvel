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
  TextInput,
  TouchableHighlight
} from 'react-native';
var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import {Actions} from 'react-native-router-flux'

export default class Rooms extends Component{
  constructor(props){
    super(props);
    this.state = {
      onClicked: false
    }
    this.handlerButtonOnClick = this.handlerButtonOnClick.bind(this);
  }
  handlerButtonOnClick(){
    this.setState({
       onClicked: true
    });
  }
  render() {
    var _style;
    if (this.state.onClicked)
    {
      _style = {
          color: "#43b4e5",
          fontSize:80,
          marginLeft:width*0.05,
          marginTop:height*0.01,
        }
    }
    else{
      _style = {
          color: "#fbf1f1",
          fontSize:80,
          marginLeft:width*0.05,
          marginTop:height*0.01,
        }
    }
    return (
    <KeyboardAwareScrollView ref="scroll" style={{backgroundColor:'white'}}>
      <View style={styles.container}>

        <View style={{flex:0.13,backgroundColor:'rgb(68, 35, 124)',flexDirection:'row'}}>
          <View style={{flex:0.8}}>
            <Text style={{ fontFamily:"times new roman",fontSize: 22,textAlign:'right', color:'white',padding:26}}>Create a new Home</Text>
          </View>
          <View style={{flex:0.2}}>
              <Icon name='times' style={{color:'white', fontSize:20,padding:28,marginTop:3}} onPress={()=>Actions.popTo('No_peeping')}/>
          </View>
        </View>

        <View style={{flex:0.28 ,marginTop:20,flexDirection:'column'}}>
              <View style={{flex:0.13}}>
                  <Text style={{fontFamily:"times new roman",fontSize: 19,fontWeight:'bold',textAlign:'center', color:'rgb(68, 35, 124)'}}>Short bio</Text>
              </View>
              <View style={{flex:0.13}}>
                <Text style={{fontFamily:"times new roman",fontSize: 15.5,textAlign:'center', color:'gray',padding:7}}>Tell us about your home</Text>
              </View>
              <View style={{flex:0.74,backgroundColor:'#f7f6f6',marginTop:10}}>
                <TouchableHighlight>
                  <Image source={require('../Images/shortbio.png')} style={{height:height*0.183,width:width,resizeMode:'stretch',position:'relative'}}  />
                </TouchableHighlight>
              </View>
        </View>

        <View style={{flex:0.59,flexDirection:'column'}}>
          <View style={{flex:0.05}}></View>
            <View style={{flex:0.6,flexDirection:'row'}}>
              <View style={{flex:0.05}}></View>
              <View style={{flex:0.9}}>
                <TextInput style={{fontSize:18,fontStyle:'italic',textAlign:'center'}} multiline={true} numberOfLines={10} underlineColorAndroid = "transparent" placeholder="introduce yourself and your home" onChange={this.handlerButtonOnClick}/>
              </View>
              <View style={{flex:0.05}}></View>
            </View>
            <View style={{flex:0.05}}></View>
            <View style={{flex:0.3,flexDirection:'row'}}>
              <View style={{flex:0.3}}>
                <Icon name='circle' style={{color:'rgb(68, 35, 124)', fontSize:80,marginLeft:width*0.07,position:'relative',marginTop:height*0.01}}/>
                <Icon name='arrow-left' style={{color:'white', fontSize:40,marginLeft:width*0.12,position:'absolute',marginTop:height*0.04}} onPress={()=>Actions.popTo('New_home_housemates')}/>
              </View>
              <View style={{flex:0.4}}></View>
              <View style={{flex:0.3}}>
                <Icon name='check-circle' style={_style} onPress={()=>Actions.New_home_housephotos()}/>
              </View>
            </View>
        </View>
      </View>
        </KeyboardAwareScrollView>
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
