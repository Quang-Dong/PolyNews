import React, {Component} from 'react';
import {View, Text, Image, FlatList, SafeAreaView} from 'react-native';

import {Neomorph} from 'react-native-neomorph-shadows';

import {TouchableOpacity} from 'react-native-gesture-handler';

import firebase from 'firebase';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    };

    this.itemRef = firebase.database().ref('videos');
  }

  listenForItems = itemRef => {
    itemRef.on('value', snap => {
      let items = [];
      snap.forEach(child => {
        let item = {
          id: child.key,
          videoID: child.val().videoID,
          title: child.val().title,
          image: child.val().image,
          time: child.val().time,
        };
        items.push(item);
      });
      this.setState({
        videos: items,
      });
      this.state.videos.map((item, idx) => {
        console.log(item.id);
      });
    });
  };

  componentDidMount() {
    this.listenForItems(this.itemRef);
  }

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#EBECF0',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FlatList
          data={this.state.videos}
          renderItem={({item}) => (
            <Neomorph
              swapShadows // <- change zIndex of each shadow color
              style={{
                shadowRadius: hp('0.5%'),
                borderRadius: hp('1.5%'),
                backgroundColor: '#EBECF0',
                width: wp('95%'),
                height: hp('16%'),
                justifyContent: 'center',
                alignItems: 'center',
                margin: hp('1%'),
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('VideoDetail', {
                    id: item.id,
                    videoID: item.videoID,
                  });
                }}
                style={{
                  flexDirection: 'row',
                  width: wp('89%'),
                  height: hp('13.5%'),
                  borderRadius: hp('1.5%'),
                  backgroundColor: '#EBECF0',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Image
                  source={{uri: item.image}}
                  style={{
                    height: hp('13.5%'),
                    width: wp('25%'),
                    borderRadius: hp('1.5%'),
                  }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    height: hp('13.5%'),
                    width: wp('61%'),
                  }}>
                  <View
                    style={{
                      flex: 4,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: '#5F6571',
                        fontSize: hp('2.4%'),
                      }}>
                      {item.title}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                    }}>
                    <Text style={{color: '#CBCDD4', fontWeight: 'bold'}}>
                      {item.time}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Neomorph>
          )}
          key={item => item.id}
        />
      </SafeAreaView>
    );
  }
}
