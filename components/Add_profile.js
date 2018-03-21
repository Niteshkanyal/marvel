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
  AsyncStorage
} from 'react-native';
var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import {Actions} from 'react-native-router-flux'

export default class Rooms extends Component{
  state = {
      name:'',
      age:'',
      pic:'',
      person:[],
   }

    async componentDidMount()
    {
           let response = await AsyncStorage.getItem('person');
           let listOfTasks = await JSON.parse(response) || [];
           this.setState({person:listOfTasks});
    }

  call =()=>{

     const person = [...this.state.person,
     {
       name:this.state.name,
       age:this.state.age,
       pic:this.state.pic,
     } ];
     if((this.state.age=='')||(this.state.name==''))
     {
       alert('Make sure You will fill all fields')
     }
     else{
       AsyncStorage.setItem('person', JSON.stringify(person));
       Actions.New_home_housemates()
       // console.log(person)
     }
   }

   setName = (value) => {
      this.setState({name: value });
   }
   setAge = (value) => {
      this.setState({age: value });
   }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:0.88}}>

          <KeyboardAwareScrollView ref="scroll" style={styles.scroller}>
           <View style={styles.container}>

                <View style={{flex:0.13,backgroundColor:'rgb(68, 35, 124)',flexDirection:'row'}}>
                 <View style={{flex:0.2}}>
                     <Icon name='arrow-left' style={{color:'white', fontSize:20,padding:28,marginTop:3}}onPress={()=>Actions.pop()}/>
                 </View>
                 <View style={{flex:0.8}}>
                   <Text style={{ fontFamily:"times new roman",fontSize: 22,textAlign:'left', color:'white',padding:26,marginLeft:10}}>Add a new person</Text>
                 </View>
               </View>
               <View style={{flex:0.03 ,backgroundColor:'#f7f6f6',marginTop:10}}></View>
               <View style={{flex:0.39,flexDirection:'column',position:'relative',backgroundColor:'#f7f6f6'}}>
                 <View style={{flex:0.7,flexDirection:'row'}}>
                   <View style={{flex:0.3}}></View>
                   <View style={{flex:0.4,borderRadius:100}}>
                     <Image source={require('../Images/profile.png')} style={{height:height*0.26,width:width*0.4,borderRadius:100,position:'relative'}}/>
                     <Icon name='circle' style={{color:'white', fontSize:75,marginLeft:width*0.23,marginTop:height*0.15,position:'absolute'}}/>
                     <Icon name='upload' style={{color:'rgb(68, 35, 124)', fontSize:30,marginLeft:width*0.28,marginTop:height*0.19,position:'absolute'}}/>
                   </View>
                   <View style={{flex:0.3}}></View>
                 </View>
                 <View style={{flex:0.3,flexDirection:'column'}}>
                   <View style={{flex:0.4}}></View>
                   <View style={{flex:0.6,flexDirection:'row',marginTop:10}}>
                     <View style={{flex:0.5}}><Text style={{fontSize:20,color:'#535353',marginLeft:35}}><Text style={{color:'red'}}>*</Text>Name</Text></View>
                     <View style={{flex:0.5}}><Text style={{fontSize:20,color:'#535353',marginLeft:35}}><Text style={{color:'red'}}>*</Text>Age</Text></View>
                   </View>
                   </View>
               </View>

               <View style={{flex:0.45,flexDirection:'column',position:'relative'}}>

                 <View style={{flex:0.2 ,flexDirection:'row'}}>
                   <View style={{flex:0.5}}>
                     <TextInput style={{ fontSize:18,marginLeft:33}} placeholder='Don' underlineColorAndroid = "transparent" onChangeText = {this.setName}/>
                   </View>
                   <View style={{flex:0.5}}>
                     <TextInput style={{ fontSize:18,marginLeft:35}} placeholder='21'  keyboardType='numeric' underlineColorAndroid = "transparent" onChangeText = {this.setAge}/>
                   </View>
                 </View>

                 <View style={{flex:0.25,backgroundColor:'#f7f6f6',position:'relative'}}>
                   <Text style={{fontSize:20,color:'#535353',padding:20,marginLeft:15,marginTop:8}}>Tags</Text>
                 </View>
                   <Icon name='circle' style={{color:'white', fontSize:80,marginTop:height*0.12,position:'absolute',marginLeft:width*0.7}} />
                   <Icon name='plus' style={{color:'rgb(68, 35, 124)', fontSize:30,marginTop:height*0.16,position:'absolute',marginLeft:width*0.758}} />
                 <View style={{flex:0.55,position:'relative',flexDirection:'column',marginTop:height*0.05}}>
                   <View style={{flex:0.2}}></View>
                   <View style={{flex:0.6,flexDirection:'column'}}>

                     <View style={{flex:0.475,flexDirection:'row'}}>
                       <View style={{flex:0.135}}></View>
                       <View style={{flex:0.25,borderRadius:10,backgroundColor:'rgb(68, 35, 124)',position:'relative'}}>
                         <Text style={{fontSize:16,textAlign:'left',color:'white',padding:10}}>cooking</Text>
                         <Icon name='times' style={{color:'white', fontSize:15,marginTop:height*0.02,position:'absolute',marginLeft:width*0.199}}/>
                       </View>
                       <View style={{flex:0.015}}></View>
                       <View style={{flex:0.2,borderRadius:10,backgroundColor:'rgb(68, 35, 124)',position:'relative'}}>
                         <Text style={{fontSize:16,textAlign:'left',color:'white',padding:10}}>music</Text>
                         <Icon name='times' style={{color:'white', fontSize:15,marginTop:height*0.02,position:'absolute',marginLeft:width*0.16}}/>
                       </View>
                       <View style={{flex:0.015}}></View>
                       <View style={{flex:0.27,borderRadius:10,backgroundColor:'rgb(68, 35, 124)',position:'relative'}}>
                         <Text style={{fontSize:16,textAlign:'left' ,color:'white',padding:10}}>weekends</Text>
                         <Icon name='times' style={{color:'white', fontSize:15,marginTop:height*0.02,position:'absolute',marginLeft:width*0.23}}/>
                       </View>
                       <View style={{flex:0.115}}></View>
                     </View>
                     <View style={{flex:0.05,marginTop:height*0.01}}></View>

                     <View style={{flex:0.475 ,flexDirection:'row'}}>
                       <View style={{flex:0.24}}></View>
                       <View style={{flex:0.22,borderRadius:10,backgroundColor:'rgb(68, 35, 124)',position:'relative'}}>
                         <Text style={{fontSize:16,textAlign:'left' ,color:'white',padding:10}}>coffee</Text>
                         <Icon name='times' style={{color:'white', fontSize:15,marginTop:height*0.02,position:'absolute',marginLeft:width*0.16}}/>
                       </View>
                       <View style={{flex:0.015}}></View>
                       <View style={{flex:0.25,borderRadius:10,backgroundColor:'rgb(68, 35, 124)',position:'relative'}}>
                         <Text style={{fontSize:16,textAlign:'left' ,color:'white',padding:10}}>running</Text>
                         <Icon name='times' style={{color:'white', fontSize:15,marginTop:height*0.02,position:'absolute',marginLeft:width*0.189}}/>
                       </View>
                       <View style={{flex:0.275}}></View>
                     </View>
                   </View>
                   <View style={{flex:0.2}}></View>
                 </View>
               </View>

           </View>
        </KeyboardAwareScrollView>
      </View>
      <View style={{flex:0.12,flexDirection:'row',backgroundColor:'#43b4e5'}}>
        <View style={{flex:0.25,backgroundColor:'#43b4e5'}}></View>
        <View style={{flex:0.5,flexDirection:'row',backgroundColor:'#43b4e5'}}>
          <View style={{flex:0.8,backgroundColor:'#43b4e5'}}>
            <Text style={{fontSize:20,color:'white',padding:15}} onPress={this.call}>Add person</Text>
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
  container: {
    flex: 1,
    flexDirection:'column',
     //justifyContent: 'center',
     backgroundColor:'white',
    //backgroundColor: '#F5FCFF',
  },
  scroller: {
    backgroundColor: "white",
  },
});
