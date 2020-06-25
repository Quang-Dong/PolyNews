import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import YouTube from 'react-native-youtube';

import {Neomorph, Shadow} from 'react-native-neomorph-shadows';

export default class VideoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: true,
      status: '',
      quality: '',
      error: '',
    };
  }

  render() {
    const {height, width} = Dimensions.get('window');

    const stWidth = 540; //Standard Width
    const stHeight = 936; // Standard Height

    const {route} = this.props;
    const {itemId} = route.params;
    const {title} = route.params;
    return (
      <View
        style={{
          backgroundColor: '#EBECF0',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <YouTube
          apiKey="AIzaSyBatYNufQAkxJ2gToAHh1qGFgEvqeaq8vQ"
          videoId="OuWfdRZxhVM"
          play
          // fullscreen
          loop
          onReady={e => this.setState({isReady: true})}
          onChangeState={e =>
            this.setState(
              {status: e.state},
              console.log('Tình trạng: ' + e.state),
            )
          }
          onChangeQuality={e =>
            this.setState(
              {quality: e.quality},
              console.log('Chất lượng: ' + e.quality),
            )
          }
          onError={e =>
            this.setState({error: e.error}, console.log('Lỗi: ' + e.error))
          }
          style={{
            alignSelf: 'stretch',
            width: (450 / stWidth) * width,
            height: (300 / stHeight) * height,
            backgroundColor: '#EBECF0',
            alignSelf: 'center',
            borderRadius: 10,
          }}
        />
      </View>
    );
  }
}
