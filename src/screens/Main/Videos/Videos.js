import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';

import {Neomorph, Shadow} from 'react-native-neomorph-shadows';

import {TouchableOpacity} from 'react-native-gesture-handler';

import firebase from 'firebase';

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

    const {height, width} = Dimensions.get('window');

    const stWidth = 540; //Standard Width
    const stHeight = 936; // Standard Height

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
                shadowRadius: (5 / stHeight) * height,
                borderRadius: (15 / stHeight) * height,
                backgroundColor: '#EBECF0',
                width: (500 / stWidth) * width,
                height: (150 / stHeight) * height,
                justifyContent: 'center',
                alignItems: 'center',
                margin: 10,
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
                  width: (480 / stWidth) * width,
                  height: (130 / stHeight) * height,
                  borderRadius: (15 / stHeight) * height,
                  backgroundColor: '#EBECF0',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Image
                  source={{uri: item.image}}
                  style={{
                    height: (130 / stHeight) * height,
                    width: (130 / stWidth) * width,
                    borderRadius: (15 / stHeight) * height,
                  }}
                />
                <View
                  style={{
                    flexDirection: 'column',
                    height: (130 / stHeight) * height,
                    width: (330 / stWidth) * width,
                  }}>
                  <View
                    style={{
                      flex: 4,
                    }}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: '#5F6571',
                        fontSize: 17,
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
