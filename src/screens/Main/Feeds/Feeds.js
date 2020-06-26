import React, {Component} from 'react';
import {View} from 'react-native';

import AllFeedScreen from './components/AllFeed';
import ICTScreen from './components/ICT';
import LifeScreen from './components/Life';
import SportScreen from './components/Sport';
import HealthScreen from './components/Health';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
              height: hp('5%'),
            },
            labelStyle: {
              fontWeight: 'bold',
              width: hp('11%'),
            },
            activeTintColor: '#FDBA7C',
            inactiveTintColor: '#BEC1C9',
            indicatorStyle: {
              backgroundColor: '#EBECF0',
            },
          }}>
          <Tab.Screen
            name="All Feeds"
            component={AllFeedScreen}
            options={{title: 'Tổng hợp'}}
          />
          <Tab.Screen
            name="ICT"
            component={ICTScreen}
            options={{title: 'Công nghệ'}}
          />
          <Tab.Screen
            name="Life"
            component={LifeScreen}
            options={{title: 'Đời sống'}}
          />
          <Tab.Screen
            name="Sport"
            component={SportScreen}
            options={{title: 'Thể thao'}}
          />
          <Tab.Screen
            name="Health"
            component={HealthScreen}
            options={{title: 'Sức khỏe'}}
          />
        </Tab.Navigator>
      </View>
    );
  }
}
