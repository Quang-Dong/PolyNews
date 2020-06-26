import React, {Component} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import {Neomorph, Shadow} from 'react-native-neomorph-shadows';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import firebase from 'firebase';

export default class FeedDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.itemsRef = firebase.database().ref('likes');
  }

  setDB = (id, title, image, time, opening, opening2, content, state) => {
    this.itemsRef.push({
      id: id,
      title: title,
      image: image,
      time: time,
      opening: opening,
      opening2: opening2,
      content: content,
      state: state,
    });
  };

  render() {
    const {height, width} = Dimensions.get('window');

    const stWidth = 540; //Standard Width
    const stHeight = 936; // Standard Height

    const {route} = this.props;
    const {
      id,
      title,
      time,
      opening,
      opening2,
      image,
      content,
      state,
    } = route.params;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#EBECF0',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        <Neomorph
          swapShadows // <- change zIndex of each shadow color
          style={{
            shadowRadius: (6 / stHeight) * height,
            borderRadius: (15 / stHeight) * height,
            backgroundColor: '#EBECF0',
            width: width - 20,
            height: height - 50,
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Neomorph
            inner
            swapShadows // <- change zIndex of each shadow color
            style={{
              shadowRadius: (6 / stHeight) * height,
              borderRadius: (15 / stHeight) * height,
              backgroundColor: '#EBECF0',
              width: width - 20,
              height: height - 50,
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <ScrollView>
              <View
                style={{width: (470 / stWidth) * width, marginVertical: 10}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#5F6571',
                    fontSize: 24,
                  }}>
                  {title}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: (470 / stWidth) * width,
                  marginBottom: 10,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="clockcircleo" size={16} color="gray" />
                  <Text style={{color: 'gray', marginLeft: 5}}>{time}</Text>
                </View>
                <TouchableOpacity
                  style={{alignSelf: 'flex-end'}}
                  onPress={() =>
                    this.setDB(
                      id,
                      title,
                      image,
                      time,
                      opening,
                      opening2,
                      content,
                      state,
                    )
                  }>
                  <Icon name="heart" size={16} color="#FDBA7C" />
                </TouchableOpacity>
              </View>

              <View style={{width: (470 / stWidth) * width}}>
                <Text
                  style={{
                    color: '#5F6571',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  {opening}
                </Text>
              </View>

              <View style={{width: (470 / stWidth) * width, marginTop: 10}}>
                <Text
                  style={{
                    color: '#5F6571',
                    fontSize: 18,
                  }}>
                  {opening2}
                </Text>
              </View>
              <Image
                source={{uri: image}}
                style={{
                  height: (260 / stHeight) * height,
                  width: (470 / stWidth) * width,
                  borderRadius: 10,
                  marginVertical: 15,
                }}
              />
              <View style={{width: (470 / stWidth) * width, marginBottom: 10}}>
                <Text
                  style={{
                    color: '#5F6571',
                    fontSize: 18,
                  }}>
                  {content}
                </Text>
              </View>
            </ScrollView>
          </Neomorph>
        </Neomorph>
      </View>
    );
  }
}
