import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import {Neomorph} from 'react-native-neomorph-shadows';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import firebaseConfig from 'firebase';

export default class ICT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
    };

    this.itemsRef = firebaseConfig
      .database()
      .ref('allFeeds')
      .child('ICT');
  }

  listenForItems = itemsRef => {
    itemsRef.on('value', snap => {
      var items = [];
      snap.forEach(child => {
        let item = {
          id: child.key,
          title: child.val().title,
          time: child.val().time,
          opening: child.val().opening,
          opening2: child.val().opening2,
          image: child.val().image,
          content: child.val().content,
          state: child.val().state,
          link: child.val().link,
        };
        items.push(item);
      });

      this.setState({
        feeds: items,
      });

      this.state.feeds.map((item, idx) => {
        console.log(item.id);
      });
    });
  };

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  render() {
    const {navigation} = this.props;

    const {height, width} = Dimensions.get('window');

    const stWidth = 540; //Standard Width
    const stHeight = 936; // Standard Height

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#EBECF0',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Neomorph
          swapShadows // <- change zIndex of each shadow color
          style={{
            shadowRadius: hp('0.5%'),
            borderRadius: hp('1%'),
            backgroundColor: '#EBECF0',
            width: wp('93%'),
            height: hp('80%'),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Neomorph
            inner
            swapShadows // <- change zIndex of each shadow color
            style={{
              shadowRadius: hp('0.5%'),
              borderRadius: hp('1%'),
              backgroundColor: '#EBECF0',
              width: wp('93%'),
              height: hp('80%'),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SafeAreaView
              style={{backgroundColor: '#EBECF0', margin: hp('1.5%')}}>
              <FlatList
                data={this.state.feeds}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={{marginBottom: hp('2%')}}
                    onPress={() => {
                      navigation.navigate('FeedDetail', {
                        id: item.id,
                        title: item.title,
                        time: item.time,
                        opening: item.opening,
                        opening2: item.opening2,
                        image: item.image,
                        content: item.content,
                        state: item.state,
                      });
                    }}>
                    <Image
                      source={{uri: item.image}}
                      style={{
                        height: hp('22%'),
                        width: wp('87%'),
                        flex: 4,
                        borderRadius: hp('1%'),
                        alignSelf: 'center',
                      }}
                    />
                    <View style={{flex: 1}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: '#5F6571',
                          fontSize: hp('2%'),
                        }}>
                        {item.title}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
                key={item => item.id}
              />
            </SafeAreaView>
          </Neomorph>
        </Neomorph>
      </View>
    );
  }
}
