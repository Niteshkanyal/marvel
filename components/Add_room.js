// import { Actions } from "react-native-router-flux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { connect } from "react-redux";
import React, { Component } from 'react';
import {Actions} from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import {StyleSheet,View,TextInput,Text,Image,TouchableHighlight,Dimensions} from 'react-native'
var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import DatePicker from 'react-native-datepicker'

export default class Add_room extends Component
{
    constructor(props){
      super(props)
      this.state = {
       date:"",
       onClicked_one: false,
       onClicked_two:false,
       onClicked_three: false,
       onClicked_four:false,
      }
      this.handlerButtonOnClick_one = this.handlerButtonOnClick_one.bind(this);
      this.handlerButtonOnClick_two = this.handlerButtonOnClick_two.bind(this);
      this.handlerButtonOnClick_three = this.handlerButtonOnClick_three.bind(this);
      this.handlerButtonOnClick_four = this.handlerButtonOnClick_four.bind(this);
    }
    handlerButtonOnClick_one(){
      this.setState({
         onClicked_one:true,
         onClicked_two:false,
      });
    }
    handlerButtonOnClick_two(){
      this.setState({
         onClicked_two:true,
         onClicked_one:false,
      });
    }
    handlerButtonOnClick_three(){
      this.setState({
         onClicked_three: true,
         onClicked_four:false,
      });
    }
    handlerButtonOnClick_four(){
      this.setState({
         onClicked_four: true,
         onClicked_three:false,
      });
    }
  render()
  {
    var _style={fontSize:30,padding:10,marginTop:3}
    var _style1={ fontSize:30,padding:10,marginTop:3}
    var _style2={fontSize:30,padding:10,marginTop:3}
    var _style3={fontSize:30,padding:10,marginTop:3}

    if (this.state.onClicked_one)
    {
      _style = {
          ..._style,
          color: "rgb(68, 35, 124)",
        }
        //this.setState({onClicked_one:false})
    }
    else{
      _style = {
          ..._style,
          color: "#D3D3D3",
        }
    }

    if (this.state.onClicked_two)
    {
      _style1 = {
          ..._style,
          color: "rgb(68, 35, 124)",
        }
      //  this.setState({onClicked_two:false,})
    }
    else{
      _style1 = {
          ..._style,
          color: "#D3D3D3",
        }
    }

    if (this.state.onClicked_three)
    {
      _style2 = {
          ..._style,
          color: "rgb(68, 35, 124)",
        }
        //this.setState({onClicked_three:false,})
    }
    else{
      _style2 = {
          ..._style,
          color: "#D3D3D3",
        }
    }

    if (this.state.onClicked_four)
    {
      _style3 = {
          ..._style,
          color: "rgb(68, 35, 124)",
        }
        //this.setState({onClicked_four:false,})
    }
    else{
      _style3 = {
          ..._style,
          color: "#D3D3D3",
        }
    }
    return(
  <View style={styles.container}>
    <View style={{flex:0.88}}>

      <KeyboardAwareScrollView ref="scroll" style={styles.scroller}>
       <View style={styles.container}>
         <View style={{flex:0.13,backgroundColor:'rgb(68, 35, 124)',flexDirection:'row'}}>
           <View style={{flex:0.8}}>
             <Text style={{ fontFamily:"FaktProSoft",fontSize: 22,marginLeft:50,textAlign:'center', color:'white',padding:26}}>Add a room</Text>
           </View>
           <View style={{flex:0.2}}>
               <Icon name='times' style={{color:'white', fontSize:20,padding:20,marginTop:10}} onPress={()=>Actions.pop()}/>
           </View>
         </View>
          <View style={{flex:0.4, backgroundColor:'#f7f6f6',flexDirection:'column'}}>

            <View style={{flex:0.3,flexDirection:'row',marginTop:20}}>
              <View style={{ flex:0.5}}>
                <Text style={{marginLeft:34,fontSize:20,fontWeight:'bold'}}>Suitable for</Text>
              </View>
              <View style={{  flex:0.5, justifyContent: 'center',alignItems: 'center',}}>
                <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}>Male or Female</Text>
              </View>
            </View>
            <View style ={{flex:0.3,flexDirection:'row',marginTop:20}}>
              <View style={{flex:0.22,backgroundColor:'white',marginLeft:40,justifyContent: 'center', alignItems: 'center',borderRadius:10,height:60}}>
                <Icon name='user' style={_style} onPress={this.handlerButtonOnClick_one}/>
              </View>
              <View style={{flex:0.22,backgroundColor:'white',marginLeft:23,justifyContent: 'center', alignItems: 'center',borderRadius:10,height:60}}>
                <Icon name='users' style={_style1} onPress={this.handlerButtonOnClick_two}/>
              </View>
              <View style={{flex:0.22,backgroundColor:'white',marginLeft:34,justifyContent: 'center', alignItems: 'center',borderRadius:10,height:60}}>
                <Icon name='male' style={_style2} onPress={this.handlerButtonOnClick_three}/>
              </View>
              <View style={{flex:0.22,backgroundColor:'white',marginLeft:23,justifyContent: 'center', alignItems: 'center',borderRadius:10,height:60}}>
                <Icon name='female' style={_style3} onPress={this.handlerButtonOnClick_four}/>
              </View>
            </View>

            <View style ={{flex:0.2,flexDirection:'row',marginTop:10}}>
              <View style={{flex:0.24,marginLeft:25,justifyContent: 'center', alignItems: 'center',}}>
                    <Text style={{textAlign:'center'}}>1 Person</Text>
              </View>
              <View style={{flex:0.24,marginLeft:20,justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{textAlign:'center'}}>2 Sharing</Text>
              </View>
              <View style={{flex:0.22,marginLeft:20,justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{textAlign:'center'}}>Male</Text>
              </View>
              <View style={{flex:0.22,marginLeft:26,justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{textAlign:'center'}}>Female</Text>
              </View>
            </View>

            <View style={{flex:0.2,marginTop:25,marginBottom:10}}><Text style={{marginLeft:40,fontSize:20,fontWeight:'bold'}}>Monthly cost</Text></View>
          </View>
          <View style={{flex:0.5,flexDirection:'column'}}>
            <View style={{flex:0.1,marginLeft:35,flexDirection:'row'}}>
              <View style={{flex:0.2,padding:5}}><Text style={{fontSize:18}}>$</Text></View>
              <View style={{flex:0.8}}>
                <TextInput style={{height:40,fontSize:18}} placeholder="550" keyboardType='numeric' underlineColorAndroid = "transparent"/>
              </View>
            </View>
            <View style={{flex:0.1,marginBottom:10, marginTop:10,backgroundColor:'#f7f6f6',height:50}}>
              <Text style={{marginLeft:40,fontSize:20,fontWeight:'bold',marginTop:10}}>Security Deposit</Text>
            </View>
            <View style={{flex:0.1,marginLeft:35,flexDirection:'row'}}>
              <View style={{flex:0.2,padding:5}}><Text style={{fontSize:18}}>$</Text></View>
              <View style={{flex:0.8}}>
                <TextInput style={{height:40,fontSize:18 }} placeholder="550" keyboardType='numeric' underlineColorAndroid = "transparent"/>
              </View>
            </View>

            <View style={{flex:0.1,marginBottom:10, backgroundColor:'#f7f6f6',height:50,flexDirection:'row'}}>
                <View style={{flex:0.5}}>
                  <Text style={{marginLeft:40,fontSize:20,fontWeight:'bold',marginTop:10}}>Available from</Text>
                </View>
                <View style={{flex:0.5}}>
                  <Text style={{marginLeft:40,fontSize:20,fontWeight:'bold',marginTop:10}}>Term length</Text>
                </View>
            </View>
            <View style={{flex:0.1,flexDirection:'row'}}>

              <View style={{flex:0.5,marginLeft:35} }>
                <DatePicker
                      style={{width:150,height:40, borderColor: '#757575',}}
                      date={this.state.date}
                      mode="date"
                      placeholder=""
                      placeholderTextColor = "#757575"
                      format="YYYY-MM-DD"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      onDateChange={(date) => {this.setState({date: date})}}
                 />
              </View>
              <View style={{flex:0.5 ,marginLeft:38}}>
                <TextInput style={{height:40 ,fontSize:15}} placeholder="long term"  underlineColorAndroid = "transparent"/>
              </View>

            </View>
            <View style={{flex:0.1,marginBottom:10, marginTop:10,backgroundColor:'#f7f6f6',height:50}}>
              <Text style={{marginLeft:40,fontSize:20,fontWeight:'bold',marginTop:10}}>Brief Description of the room</Text>
            </View>
            <View style={{flex:0.2,marginLeft:35}}>
              <TextInput style={{height:70,fontSize:15 }} placeholder="E.g. Downstairs with sunlight in the morning"  underlineColorAndroid = "transparent"/>
            </View>
            <View style={{backgroundColor:'#f7f6f6',flex:0.3}}>
              <Text style={{marginLeft:40,fontSize:20,fontWeight:'bold',marginTop:10}}>Photos of the room</Text>
            </View>
            <View style={{flex:0.2,marginLeft:35}}>
              <TextInput style={{height:70,fontSize:15 }} placeholder="E.g. Downstairs with sunlight in the morning"  underlineColorAndroid = "transparent"/>
            </View>

          </View>

       </View>
    </KeyboardAwareScrollView>
  </View>
  <View style={{flex:0.12,flexDirection:'row',backgroundColor:'#43b4e5'}}>
    <View style={{flex:0.25,backgroundColor:'#43b4e5'}}></View>
    <View style={{flex:0.5,flexDirection:'row',backgroundColor:'#43b4e5'}}>
      <View style={{flex:0.8,backgroundColor:'#43b4e5'}}>
        <Text style={{fontSize:22,color:'white',padding:15}} >Add room</Text>
      </View>
      <View style={{flex:0.2,backgroundColor:'#43b4e5'}}>
        <Icon name='check' style={{color:'white', fontSize:22,marginTop:height*0.03}}/>
      </View>
    </View>
    <View style={{flex:0.25,backgroundColor:'#43b4e5'}}></View>
  </View>
</View>
    );
  }
}

const styles = StyleSheet.create({
  scroller: {
    backgroundColor: "white"
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },

});
