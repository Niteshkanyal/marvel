import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import male from '../Images/male.png'
import female from '../Images/female.png'
import femaleicon from '../Images/femaleicon.jpeg'
import maleicon from '../Images/maleicon.png'
import multi from '../Images/multi.jpeg'
import bed from '../Images/bed.png'
import single from '../Images/single.png'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight,
  FlatList,
  AsyncStorage,
} from 'react-native';
var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import {Actions} from 'react-native-router-flux'

export default class Rooms extends Component{
  constructor(props){
    super(props);
    this.state = {
      onClicked: false,
      list:[],
    }
  }


  componentWillMount(){

  AsyncStorage.getItem("rooms").then((value) => {
    if (value) {
      this.setState({list:JSON.parse(value)});
    } else {
      this.setState({list:[]});
    }
  })
  if(this.state.list.length==0){
    this.setState({
       onClicked: true,
    });
  }
  }
  refresh=()=>{
    AsyncStorage.removeItem('rooms')
    AsyncStorage.getItem("rooms").then((value) => {
      if (value) {
        this.setState({list:JSON.parse(value)});
      } else {
        this.setState({list:[]});
      }
    })
  }

  render() {
    let htmlcondition='';
    let html_='';
    if(this.state.list.length==0){
      var dead=this.state.list.length;
      html_=(
        <View style={{flex:0.4,flexDirection:'column'}}></View>
      )
      htmlcondition=(

        <View style={{flex:0.6,flexDirection:'row'}}>
          <View style={{flex:0.35}}></View>
          <View style={{flex:0.4,flexDirection:'column'}}>
            <View style={{flex:0.3}}></View>
            <View style={{flex:0.5}}>
              <TouchableOpacity onPress={()=>Actions.Add_room()} >
                <Image source={require('../Images/real.png')} style={{height:height*0.18,width:width*0.4,resizeMode:'stretch',position:'relative'}}  />
              </TouchableOpacity>
            </View>
            <View style={{flex:0.2}}><Text style={{fontSize:14,color:'rgb(68, 35, 124)',textAlign:'center',padding:10,marginRight:20}}>No Rooms Available !</Text></View>
          </View>
          <View style={{flex:0.15}}></View>
        </View>

      )
    }else{
      html_=(
        <View style={{flex:0.4,flexDirection:'column'}}>
          <View style={{flex:0.3}}></View>
          <View style={{flex:0.3,flexDirection:'row'}}>
            <View style={{flex:0.3}}></View>
            <View style={{flex:0.4,backgroundColor:'red',borderRadius:100,}}>
              <Text style={{color:'white',fontSize:16,textAlign:'center',padding:3}} onPress={this.refresh}>Reset</Text>
            </View>
            <View style={{flex:0.3}}></View>
          </View>
          <View style={{flex:0.3}}></View>
        </View>
      )
      htmlcondition=(


        <View style={[{flex:0.6,backgroundColor:'white'}]}>
            <FlatList
                data={ this.state.list }
                numColumns={1}
                ItemSeparatorComponent = {this.FlatListItemSeparator}
                keyExtractor={item => item.id}
                renderItem={({item,index}) =>{
                  let single_multiple = '';
                  if(item.suitable=='single')
                  {
                    single_multiple = single
                  }else{
                    single_multiple = multi;
                  }
                  return(
                  <View style={{ borderRadius:10,flexDirection:'row',margin:20,height:50,flex: 1,backgroundColor:'rgb(247,246,246)',alignItems:'center'}}>
                    <View style={{flex:0.2,flexDirection:'row'}}>
                      <Image style={{width:width*0.15,height:height*0.1,resizeMode:'stretch'}} source={bed} />
                      {/* <Image style={{width:width*0.08,height:height*0.07,resizeMode:'stretch',marginTop:4}}  source={single_multiple} />*/}
                    </View>
                    <View style={{width:2,height:35,backgroundColor:'#412277',margin:10}}>
                      </View>
                    <View style={{flex:0.3}}>
                      <Text style={{fontSize:15,color:'red'}}>{item.date}</Text>
                    </View>
                    <View style={{width:2,height:35,backgroundColor:'#412277',margin:10}}>
                      </View>
                    <View style={{flex:0.3,flexDirection:'row'}}>
                      <Image style={{width:30,height:30}} source={single_multiple} />
                      <Icon name='female' style={{color:'#90d2de',fontSize:30,marginLeft:8}}/>
                      <Icon name='male' style={{color:'#d790de',fontSize:30,marginLeft:9}}/>
                    </View>
                    <View style={{width:2,height:35,backgroundColor:'#412277',margin:10}}>
                      </View>
                    <View style={{flex:0.2}}>
                      <Text style={{fontSize:18}}><Text style={{color:'blue'}}>$</Text>{item.monthlycost}</Text>
                    </View>
                  </View>
                  )
                }
                }
              />
          </View>
        );
    }
    var _style={fontSize:80,marginLeft:width*0.05,marginTop:height*0.02}
    if (this.state.onClicked)
    {
      _style = {
          ..._style,
          color: "#43b4e5",
        }
    }
    else{
      _style = {
          ..._style,
          color: "#fbf1f1",
        }
    }
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
                  <Text style={{fontFamily:"times new roman",fontSize: 19,fontWeight:'bold',textAlign:'center', color:'rgb(68, 35, 124)'}}>Rooms</Text>
              </View>
              <View style={{flex:0.13}}>
                <Text style={{fontFamily:"times new roman",fontSize: 15.5,textAlign:'center', color:'gray',padding:7}}>Add any available rooms</Text>
              </View>
              <View style={{flex:0.74,backgroundColor:'#f7f6f6',marginTop:10}}>
                <TouchableHighlight>
                  <Image source={require('../Images/Rooms.png')} style={{height:height*0.183,width:width,resizeMode:'stretch',position:'relative'}}  />
                </TouchableHighlight>
                <Icon name='plus' style={{color:'rgb(68, 35, 124)', fontSize:30,position:'absolute',marginLeft:width*0.832,marginTop:height*0.115}}  onPress={()=>Actions.Add_room()}/>
              </View>
        </View>

        <View style={{flex:0.59,flexDirection:'column'}}>

          <View style={{flex:0.05}}></View>
          {htmlcondition}
          {/*<View style={{flex:0.6,flexDirection:'row'}}>
            <View style={{flex:0.35}}></View>
            <View style={{flex:0.4,flexDirection:'column'}}>
              <View style={{flex:0.3}}></View>
              <View style={{flex:0.5}}>
                <TouchableOpacity onPress={()=>Actions.Add_room()} >
                  <Image source={require('../Images/real.png')} style={{height:height*0.18,width:width*0.4,resizeMode:'stretch',position:'relative'}}  />
                </TouchableOpacity>
              </View>
              <View style={{flex:0.2}}></View>
            </View>
            <View style={{flex:0.15}}></View>
          </View>*/}

          <View style={{flex:0.05}}></View>
          <View style={{flex:0.3,flexDirection:'row'}}>
            <View style={{flex:0.3}}>
              <Icon name='circle' style={{color:'rgb(68, 35, 124)', fontSize:80,marginLeft:width*0.07,position:'relative',marginTop:height*0.02}}/>
              <Icon name='arrow-left' style={{color:'white', fontSize:40,marginLeft:width*0.12,position:'absolute',marginTop:height*0.049}} onPress={()=>Actions.popTo('New_home_housemates')}/>
            </View>

            {html_}
              {/*
            <View style={{flex:0.4,flexDirection:'column'}}>
              <View style={{flex:0.3}}></View>
              <View style={{flex:0.3,flexDirection:'row'}}>
                <View style={{flex:0.3}}></View>
                <View style={{flex:0.3,backgroundColor:'red',borderRadius:100,}}>
                  <Text style={{color:'white',fontSize:16,textAlign:'center',padding:3}} onPress={this.refresh}>Reset</Text>
                </View>
                <View style={{flex:0.3}}></View>
              </View>
              <View style={{flex:0.3}}></View>
              </View>*/}

            <View style={{flex:0.3}}>
              <Icon name='check-circle' style={_style} onPress={()=>Actions.Short_bio()}/>
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
