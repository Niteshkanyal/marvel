import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import {Actions} from 'react-native-router-flux'
var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');

export default class Add_person extends Component{
  render() {
    return (
      <View style={styles.container}>

        <View style={{flex:0.13,backgroundColor:'white',flexDirection:'row'}}>
          <View style={{flex:0.7}}>
            <Text style={{textAlign:'right',padding:26,fontSize:24,color:'rgb(68, 35, 124)'}}>Add a person</Text>
          </View>
          <View style={{flex:0.3}}>
            <Icon name='times' style={{color:'rgb(68, 35, 124)', fontSize:25,padding:30,marginTop:3,marginLeft:20}} onPress={()=>Actions.popTo('New_home_housemates')}/>
          </View>
        </View>

        <View style={{flex:0.1,backgroundColor:'white',flexDirection:'row',marginTop:5}}>
          <View style={{flex:0.7}}>
            <Text style={{textAlign:'left',padding:20,fontSize:20,color:'#acacac',fontStyle:'italic',marginLeft:25}}>Search for a person</Text>
          </View>
          <View style={{flex:0.3}}>
              <Icon name='search' style={{color:'#282828', fontSize:20,padding:20,marginTop:3,marginLeft:30}}/>
          </View>
        </View>

        <View style={{flex:0.65,flexDirection:'column'}}>

          <View style={{flex:0.12,backgroundColor:'#fbf1f1'}}></View>

          <View style={{flex:0.35,flexDirection:'row',backgroundColor:'white'}}>
            <View style={{flex:0.12,backgroundColor:'#fbf1f1'}}></View>
            <View style={{flex:0.76,flexDirection:'column'}}>
              <View style={{flex:0.5,padding:15}}>
                <Icon name='search' style={{color:'#d9d8d8', fontSize:50,textAlign:'center'}}/>
              </View>
              <View style={{flex:0.5}}>
                <Text style={{textAlign:'center',fontSize:16,color:'#acacac'}}> Search for</Text>
                <Text style={{textAlign:'center',fontSize:15,color:'#acacac'}}>someone on Roomr</Text>
              </View>
            </View>
            <View style={{flex:0.12,backgroundColor:'#fbf1f1'}}></View>
          </View>

          <View style={{flex:0.16,backgroundColor:'#fbf1f1'}}>
            <Text style={{textAlign:'center',fontSize:22,color:'#acacac',padding:20}}>or</Text>
          </View>

          <View style={{flex:0.35,flexDirection:'row',backgroundColor:'white'}}>
            <View style={{flex:0.12,backgroundColor:'#fbf1f1'}}></View>
            <View style={{flex:0.76,flexDirection:'column'}}>
              <View style={{flex:0.5,padding:20,marginTop:10}}>
                <Icon name='user-plus' style={{color:'#d9d8d8', fontSize:50,textAlign:'center'}}onPress={()=>Actions.Add_profile()}/>
              </View>
              <View style={{flex:0.5}}>
                <Text style={{textAlign:'center',fontSize:16,color:'#acacac'}}>Add a new person</Text>
              </View>
            </View>
            <View style={{flex:0.12,backgroundColor:'#fbf1f1'}}></View>
          </View>

          <View style={{flex:0.02,backgroundColor:'#fbf1f1'}}></View>

        </View>
        <View style={{flex:0.12,flexDirection:'row'}}>
            <View style={{flex:0.2}}></View>
            <View style={{flex:0.55}}></View>
            <View style={{flex:0.25}}>
                <Icon name='circle' style={{color:'rgb(68, 35, 124)', fontSize:72,textAlign:'center',position:'relative'}}/>
                <Icon name='plus' style={{color:'white', fontSize:26,textAlign:'center',position:'absolute',marginLeft:width*0.1,marginTop:23}} onPress={()=>Actions.Add_profile()}/>
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
    backgroundColor: '#fbf1f1',
  },

});
