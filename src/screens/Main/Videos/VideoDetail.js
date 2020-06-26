import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, StatusBar} from 'react-native';

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

  //TODO: Sửa giao diện nút 'quay lại'.

  render() {
    const {height, width} = Dimensions.get('window');

    const stWidth = 540; //Standard Width
    const stHeight = 936; // Standard Height

    const {route} = this.props;
    const {id, videoID} = route.params;
    return (
      <View
        style={{
          backgroundColor: 'black',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <StatusBar barStyle="light-content" backgroundColor="black" />
        <YouTube
          apiKey="AIzaSyBatYNufQAkxJ2gToAHh1qGFgEvqeaq8vQ"
          videoId={videoID}
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
            width: width,
            height: (300 / stHeight) * height,
            backgroundColor: '#EBECF0',
          }}
        />
      </View>
    );
  }
}
