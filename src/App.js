import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, StatusBar, Dimensions, StyleSheet} from 'react-native';

import FeedDetailScreen from './screens/Main/Feeds/FeedDetail';
import VideoDetailScreen from './screens/Main/Videos/VideoDetail';
import LikesScreen from './screens/Main/Likes/Likes';
import MainScreen from './screens/Main/Main';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _getHeaderTitle = route => {
    // Access the tab navigator's state using `route.state`
    const routeName = route.state
      ? // Get the currently active route name in the tab navigator
        route.state.routes[route.state.index].name
      : // If state doesn't exist, we need to default to `screen` param if available, or the initial screen
        // In our case, it's "Feed" as that's the first screen inside the navigator
        route.params?.screen || 'Feeds';

    switch (routeName) {
      case 'Feeds':
        return 'Today';
      case 'Videos':
        return 'Video';
      case 'Likes':
        return 'Likes';
    }
  };

  render() {
    const Stack = createStackNavigator();

    const {height, width} = Dimensions.get('window');

    const stWidth = 540; //Standard Width
    const stHeight = 936;

    return (
      <View style={{flex: 1, backgroundColor: '#EBECF0'}}>
        <StatusBar barStyle="dark-content" backgroundColor="#EBECF0" />

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={MainScreen}
              options={({route}) => ({
                headerTitle: this._getHeaderTitle(route),
                headerTintColor: '#595F6C',
                headerStyle: {
                  backgroundColor: '#EBECF0',
                  elevation: 0,
                },
                headerTitleStyle: {
                  fontSize: (25 / stHeight) * height,
                },
              })}
            />
            <Stack.Screen
              name="FeedDetail"
              component={FeedDetailScreen}
              options={({route}) => ({
                headerTitle: '',
                headerTintColor: '#595F6C',
                headerStyle: {
                  backgroundColor: '#EBECF0',
                  elevation: 0,
                },
                headerTitleStyle: {
                  fontSize: (25 / stHeight) * height,
                },
              })}
            />
            <Stack.Screen
              name="VideoDetail"
              component={VideoDetailScreen}
              options={({route}) => ({
                headerTitle: '',
                headerTintColor: '#595F6C',
                headerStyle: {
                  backgroundColor: '#EBECF0',
                  elevation: 0,
                },
                headerTitleStyle: {
                  fontSize: (25 / stHeight) * height,
                },
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
