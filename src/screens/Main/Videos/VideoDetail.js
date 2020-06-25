import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class VideoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {route} = this.props;
    const {itemId} = route.params;
    const {title} = route.params;
    return (
      <View>
        <Text> {itemId} </Text>
        <Text> {title} </Text>
      </View>
    );
  }
}
