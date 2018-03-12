
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Router,Scene,Stack} from 'react-native-router-flux'
import Add_person from './Add_person.js'
import Add_room from './Add_room.js'
import Create_profile from './Create_profile.js'
import New_home_housemates from './New_home_housemates.js'
import New_home_housephotos from './New_home_housephotos.js'
import Start from './Start.js'
import Rooms from './Rooms.js'
import Short_bio from './Short_bio.js'
import No_peeping from './No_peeping.js'
import Location from './Location.js'
import Success from './Success.js'
import Add_profile from './Add_profile.js'


export default class App extends Component{
  render() {
    return (
        <Router>
          <Stack key="hel" hideNavBar hideTabBar>
            <Scene key='root'>
              <Scene hideNavBar hideTabBar
              component={Start}
              title="Start"
              key="Start"
              initial
              />
              <Scene hideNavBar hideTabBar
              component={Create_profile}
              title="Profile"
              key="Create_profile"
              />
              <Scene hideNavBar hideTabBar
              component={New_home_housemates}
              title="New_home_housemates"
              key="New_home_housemates"
              />
              <Scene hideNavBar hideTabBar
              component={Add_person}
              title="Add_person"
              key="Add_person"
              />
              <Scene hideNavBar hideTabBar
              component={Add_profile}
              title="Add_profile"
              key="Add_profile"
              />

              <Scene hideNavBar hideTabBar
              component={Rooms}
              title="Rooms"
              key="Rooms"
              />
              <Scene hideNavBar hideTabBar
              component={Add_room}
              title="Add_room"
              key="Add_room"
              />

              <Scene hideNavBar hideTabBar
              component={New_home_housephotos}
              title="New_home_housephotos"
              key="New_home_housephotos"
              />
              <Scene hideNavBar hideTabBar
              component={Short_bio}
              title="Short_bio"
              key="Short_bio"
              />
              <Scene hideNavBar hideTabBar
              component={No_peeping}
              title="No_peeping"
              key="No_peeping"
              />
              <Scene hideNavBar hideTabBar
              component={Location}
              title="Location"
              key="Location"
              />
              <Scene hideNavBar hideTabBar
              component={Success}
              title="Success"
              key="Success"
              />

            </Scene>
          </Stack>
        </Router>
    );
  }
}
