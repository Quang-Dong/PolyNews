import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';

import FeedDetailScreen from './screens/Main/Feeds/FeedDetail';
import VideoDetailScreen from './screens/Main/Videos/VideoDetail';
import MainScreen from './screens/Main/Main';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
        return 'Hôm nay';
      case 'Videos':
        return 'Video';
      case 'Likes':
        return 'Yêu thích';
    }
  };

  render() {
    const Stack = createStackNavigator();

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
                  fontSize: hp('3%'),
                },
              })}
            />
            <Stack.Screen
              name="FeedDetail"
              component={FeedDetailScreen}
              options={({route}) => ({
                headerTitle: '',
                headerStyle: {
                  backgroundColor: '#EBECF0',
                  elevation: 0,
                },
              })}
            />
            <Stack.Screen
              name="VideoDetail"
              component={VideoDetailScreen}
              options={({route}) => ({
                headerTitle: '',
                headerStyle: {
                  backgroundColor: 'black',
                  elevation: 0,
                },
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
