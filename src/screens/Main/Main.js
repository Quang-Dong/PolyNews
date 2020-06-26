import React, {Component} from 'react';

import FeedsScreen from './Feeds/Feeds';
import VideosScreen from './Videos/Videos';
import LikesScreen from './Likes/Likes';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import {Neomorph} from 'react-native-neomorph-shadows';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size1 = hp('4%'), color}) => {
            let inner;
            inner = focused ? 'inner' : ''; //TODO: không thực thi code khi được được chọn
            if (route.name === 'Feeds') {
              return (
                <Neomorph
                  {...inner}
                  swapShadows // <- change zIndex of each shadow color
                  style={{
                    borderRadius: hp('1%'),
                    shadowRadius: hp('1%'),
                    backgroundColor: '#EBECF0',
                    width: hp('7%'),
                    height: hp('7%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon2 name="newspaper" size={size1} color={color} />
                </Neomorph>
              );
            } else if (route.name === 'Videos') {
              return (
                <Neomorph
                  swapShadows // <- change zIndex of each shadow color
                  style={{
                    borderRadius: hp('1%'),
                    shadowRadius: hp('1%'),
                    backgroundColor: '#EBECF0',
                    width: hp('7%'),
                    height: hp('7%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon1 name="video" size={size1} color={color} />
                </Neomorph>
              );
            } else if (route.name === 'Likes') {
              return (
                <Neomorph
                  swapShadows // <- change zIndex of each shadow color
                  style={{
                    borderRadius: hp('1%'),
                    shadowRadius: hp('1%'),
                    backgroundColor: '#EBECF0',
                    width: hp('7%'),
                    height: hp('7%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon name="ios-heart" size={size1} color={color} />
                </Neomorph>
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FDBA7C',
          inactiveTintColor: '#BEC1C9',
          tabStyle: {
            backgroundColor: '#EBECF0',
          },
          style: {
            height: hp('10%'),
            elevation: 0,
            borderTopWidth: 0,
            borderTopColor: 'transparent',
          },
          showLabel: false,
        }}>
        <Tab.Screen name="Feeds" component={FeedsScreen} />
        <Tab.Screen name="Videos" component={VideosScreen} />
        <Tab.Screen name="Likes" component={LikesScreen} />
      </Tab.Navigator>
    );
  }
}
