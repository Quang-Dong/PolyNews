import React, {Component} from 'react';
import {View, Text, Dimensions} from 'react-native';

import AllFeedScreen from './components/AllFeed';
import ICTScreen from './components/ICT';
import LifeScreen from './components/Life';
import SportScreen from './components/Sport';
import HealthScreen from './components/Health';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

export default class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Tab = createMaterialTopTabNavigator();

    return (
      <View style={{flex: 1, backgroundColor: '#EBECF0'}}>
        <Tab.Navigator
          tabBarOptions={{
            style: {
              backgroundColor: '#EBECF0',
              elevation: 0,
              height: 40,
            },
            labelStyle: {
              fontWeight: 'bold',
              width: 65,
            },
            activeTintColor: '#FDBA7C',
            inactiveTintColor: '#BEC1C9',
            indicatorStyle: {
              backgroundColor: '#EBECF0',
            },
          }}>
          <Tab.Screen name="All Feeds" component={AllFeedScreen} options={{}} />
          <Tab.Screen name="ICT" component={ICTScreen} />
          <Tab.Screen name="Life" component={LifeScreen} />
          <Tab.Screen name="Sport" component={SportScreen} />
          <Tab.Screen name="Health" component={HealthScreen} />
        </Tab.Navigator>
      </View>
    );
  }
}
