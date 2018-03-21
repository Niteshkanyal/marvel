import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Modal from "react-native-modal";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight,
  AsyncStorage,
  FlatList,
} from 'react-native';
var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import {Actions} from 'react-native-router-flux'

export default class New_home extends Component{
  constructor(props){
    super(props);
    this.state = {
      list:[],
      modalVisible:false,
      see_profile:[],
    }
  }

  componentWillMount(){

  AsyncStorage.getItem("person").then((value) => {
    if (value) {
      this.setState({list:JSON.parse(value)});
    } else {
      this.setState({list:[]});
    }
  })
}


see=(fish)=>{
  this.setState({
    modalVisible:false,
  })
  // AsyncStorage.removeItem('person'[fish])
  // AsyncStorage.getItem("person").then((value) => {
  //   if (value) {
  //     const newHouses=value.filter((value)=>value.name!=fish);
  //     this.setState({list:JSON.parse(newHouses)});
  //   } else {
  //     this.setState({list:[]});
  //   }
  // })
// alert(this.state.)
}
refresh=()=>{
  AsyncStorage.removeItem('person')
  AsyncStorage.getItem("person").then((value) => {
    if (value) {
      this.setState({list:JSON.parse(value)});
    } else {
      this.setState({list:[]});
    }
  })
}
  render() {
    // alert(this.state.list)
    let htmlcondition='';
    let html_='';
    if(this.state.list.length==0)
    {
      htmlcondition=(
        <View style={{flex:0.7,flexDirection:'column',alignItems:'center'}}>
          <View style={{flex:0.2}}></View>
          <View style={{flex:0.8}}>
            <Image style={{resizeMode:'stretch',height:height*0.2,width:width*0.4}} source={require('../Images/empty.jpeg')}/>
            <Text style={{color:'red',fontSize:15,textAlign:'center',marginTop:10}}>No Person Added !</Text>
          </View>
        </View>
      )
      html_=(
        <View style={{flex:0.25,flexDirection:'row'}}>
          <View style={{flex:0.4}}></View>
          <View style={{flex:0.15,flexDirection:'column'}}>
            <View style={{flex:0.1}}></View>
            <View style={{flex:0.6}}></View>
            <View style={{flex:0.3}}></View>
          </View>
          <View style={{flex:0.15}}></View>
          <View style={{flex:0.3}}>
            <Icon name='check-circle' style={{color:'#43b4e5', fontSize:80,marginLeft:25}} onPress={()=>Actions.Rooms()}/>
          </View>
        </View>
      )
    }
      else{
        html_=(
          <View style={{flex:0.25,flexDirection:'row'}}>
            <View style={{flex:0.4}}></View>
            <View style={{flex:0.18,flexDirection:'column'}}>
              <View style={{flex:0.1}}></View>
              <View style={{flex:0.6,backgroundColor:'red',alignItems:'center',borderRadius:50}}><Text style={{color:'white',padding:10,fontSize:14,marginTop:6}} onPress={this.refresh}>Reset</Text></View>
              <View style={{flex:0.3}}></View>
            </View>
            <View style={{flex:0.12}}></View>
            <View style={{flex:0.3}}>
              <Icon name='check-circle' style={{color:'#43b4e5', fontSize:80,marginLeft:25}} onPress={()=>Actions.Rooms()}/>
            </View>
          </View>
        )
        htmlcondition=(
          <View style={{flex:0.7,flexDirection:'column'}}>
              <FlatList
                  data={ this.state.list }
                  numColumns={3}
                  //ItemSeparatorComponent = {this.FlatListItemSeparator}
                  keyExtractor={item => item.id}
                  renderItem={({item,index}) =>{
                    return(
                   <View style={{ width:width*0.25, height:height*0.22,marginLeft:width*0.064,borderRadius:100}}>
                    <TouchableOpacity onPress={() => { this.setState({ modalVisible:true, see_profile:item }) }}>
                     <Image style={{ resizeMode:'stretch',height:height*0.16,width:width*0.25,borderRadius:100}} source={require('../Images/circle4.jpeg')} />
                     <Text style={{ fontFamily: "Verdana", fontSize: 15, marginLeft: 10, marginTop: 5, fontWeight: 'bold', color: '#000',textAlign:'center'}}> {item.name}</Text>
                     </TouchableOpacity>
                   </View>
                    )
                  }
                  }
              />
          </View>

        )
      }
    return (
    //<KeyboardAwareScrollView ref="scroll" style={{backgroundColor:'white'}}>
      <View style={styles.container}>

        <View style={{flex:0.13,backgroundColor:'rgb(68, 35, 124)',flexDirection:'row'}}>
          <View style={{flex:0.8}}>
            <Text style={{ fontFamily:"times new roman",fontSize: 22,textAlign:'right', color:'white',padding:26}}>Create a new Home</Text>
          </View>
          <View style={{flex:0.2}}>
              <Icon name='times' style={{color:'white', fontSize:20,padding:28,marginTop:3}} onPress={()=>Actions.popTo('Create_profile')}/>
          </View>
        </View>

        <View style={{flex:0.28 ,marginTop:20,flexDirection:'column'}}>
              <View style={{flex:0.13}}>
                  <Text style={{fontFamily:"times new roman",fontSize: 19,fontWeight:'bold',textAlign:'center', color:'rgb(68, 35, 124)'}}>Housemates</Text>
              </View>
              <View style={{flex:0.13}}>
                <Text style={{fontFamily:"times new roman",fontSize: 15.5,textAlign:'center', color:'gray',padding:7}}>Tell us who you live with</Text>
              </View>
              <View style={{flex:0.74,backgroundColor:'#f7f6f6',marginTop:10}}>
                <TouchableHighlight>
                  <Image source={require('../Images/tellus.png')} style={{height:height*0.18,width:width,resizeMode:'stretch',position:'relative'}}  />
                </TouchableHighlight>
                <Icon name='plus' style={{color:'rgb(68, 35, 124)', fontSize:30,position:'absolute',marginLeft:width*0.8205,marginTop:height*0.105}}  onPress={()=>Actions.Add_person()}/>
              </View>

              <Modal
                visible={this.state.modalVisible}
                animationIn="slideInLeft"
                animationOut="slideOutRight">
                <View style={styles.modalContent}>
                  <View style={{flex:0.1,flexDirection:"row"}}>
                    <View style={{flex:0.4}}></View>
                    <View style={{flex:0.5}}></View>
                    <View style={{flex:0.1}}>
                      <Icon name='times' style={{fontSize:25,color:'red'}} onPress={() => { this.setState({ modalVisible: !this.state.modalVisible }) }} />
                    </View>
                  </View>
                  <View style={{ flex: 0.7, justifyContent: "center", alignItems: "center", }}>
                    <Image source={require('../Images/circle4.jpeg')} style={{ marginLeft:width*0.02 , width:width*0.4, height:height*0.2,resizeMode:'stretch'}} />
                    <Text style={{ fontFamily: "Verdana", fontSize: 20, textAlign: 'center', marginTop:height*0.01, fontWeight: 'bold', color: '#000' }}> {this.state.see_profile.name}  , {this.state.see_profile.age}</Text>
                  </View>
                  <View style={{ flex: 0.20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
                    <TouchableOpacity style={{}} onPress={() => this.see(this.state.see_profile.name) } >
                      <Text style={{ fontSize: 20, textAlign: 'center', color: '#fff', padding: 10 }}>Remove Profile </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>

        </View>

        <View style={{flex:0.59,flexDirection:'column',marginTop:15}}>

          {htmlcondition}
          <View style={{flex:0.05}}></View>
          {html_}

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
  modalContent: {
  marginTop:30,
  flexDirection:'column',
  flex:0.5,
  backgroundColor:'#dedede',
  padding: 22,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  borderColor: "rgba(0, 0, 0, 0.1)"
},
});
