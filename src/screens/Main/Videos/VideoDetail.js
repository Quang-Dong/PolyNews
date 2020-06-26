import React, {Component} from 'react';
import {View, StatusBar} from 'react-native';

import YouTube from 'react-native-youtube';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
            width: wp('100%'),
            height: hp('50%'),
            backgroundColor: '#EBECF0',
          }}
        />
      </View>
    );
  }
}
