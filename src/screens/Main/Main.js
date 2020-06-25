import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';

import FeedsScreen from './Feeds/Feeds';
import VideosScreen from './Videos/Videos';
import LikesScreen from './Likes/Likes';
import FeedDetailScreen from './Feeds/FeedDetail';
import VideoDetailScreen from './Videos/VideoDetail';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import {Neomorph, Shadow} from 'react-native-neomorph-shadows';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {height, width} = Dimensions.get('window');

    const stWidth = 540; //Standard Width
    const stHeight = 936; // Standard Height
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size1 = (35 / stHeight) * height, color}) => {
            let inner;
            inner = focused ? 'inner' : ''; //TODO: không thực thi code khi được được chọn
            if (route.name === 'Feeds') {
              return (
                <Neomorph
                  {...inner}
                  swapShadows // <- change zIndex of each shadow color
                  style={{
                    borderRadius: (10 / stHeight) * height,
                    shadowRadius: (4 / stHeight) * height,
                    backgroundColor: '#EBECF0',
                    width: 50,
                    height: 50,
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
                    borderRadius: (10 / stHeight) * height,
                    shadowRadius: (4 / stHeight) * height,
                    backgroundColor: '#EBECF0',
                    width: 50,
                    height: 50,
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
                    borderRadius: (10 / stHeight) * height,
                    shadowRadius: (4 / stHeight) * height,
                    backgroundColor: '#EBECF0',
                    width: 50,
                    height: 50,
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
            height: (100 / stHeight) * height,
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
