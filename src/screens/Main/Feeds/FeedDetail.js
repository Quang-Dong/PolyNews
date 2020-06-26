import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import {Neomorph} from 'react-native-neomorph-shadows';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
            shadowRadius: hp('1%'),
            borderRadius: hp('1%'),
            backgroundColor: '#EBECF0',
            width: wp('90%'),
            height: hp('87%'),
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginTop: wp('4%'),
          }}>
          <Neomorph
            inner
            swapShadows // <- change zIndex of each shadow color
            style={{
              shadowRadius: hp('1%'),
              borderRadius: hp('1%'),
              backgroundColor: '#EBECF0',
              width: wp('90%'),
              height: hp('87%'),
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <ScrollView>
              <View
                style={{
                  width: wp('84%'),
                  marginVertical: hp('1%'),
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#5F6571',
                    fontSize: hp('3.3%'),
                  }}>
                  {title}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: wp('84%'),
                  marginBottom: hp('1%'),
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="clockcircleo" size={hp('2.3%')} color="gray" />
                  <Text style={{color: 'gray', marginLeft: hp('0.5%')}}>
                    {time}
                  </Text>
                </View>
                <Neomorph
                  swapShadows // <- change zIndex of each shadow color
                  style={{
                    shadowRadius: wp('1%'),
                    borderRadius: hp('10%'),
                    backgroundColor: '#EBECF0',
                    width: wp('10%'),
                    height: wp('10%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: wp('1%'),
                  }}>
                  <TouchableOpacity
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
                    <Icon name="heart" size={hp('2.8%')} color="#FDBA7C" />
                  </TouchableOpacity>
                </Neomorph>
              </View>

              <View style={{width: wp('84%')}}>
                <Text
                  style={{
                    color: '#5F6571',
                    fontSize: hp('2.7%'),
                    fontWeight: 'bold',
                  }}>
                  {opening}
                </Text>
              </View>

              <View style={{width: wp('84%'), marginTop: hp('1%')}}>
                <Text
                  style={{
                    color: '#5F6571',
                    fontSize: hp('2.5%'),
                  }}>
                  {opening2}
                </Text>
              </View>
              <Image
                source={{uri: image}}
                style={{
                  height: hp('27%'),
                  width: wp('84%'),
                  borderRadius: 10,
                  marginVertical: 15,
                }}
              />
              <View style={{width: wp('84%'), marginBottom: hp('1%')}}>
                <Text
                  style={{
                    color: '#5F6571',
                    fontSize: hp('2.5%'),
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
