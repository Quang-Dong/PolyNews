import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';

import firebase from 'firebase';

import {Neomorph} from 'react-native-neomorph-shadows';

import Swipeout from 'react-native-swipeout';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Likes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: [],
    };

    this.itemRef = firebase.database().ref('likes');
  }

  listenForItems = itemRef => {
    itemRef.on('value', snap => {
      let items = [];
      snap.forEach(child => {
        let item = {
          id: child.key,
          title: child.val().title,
          image: child.val().image,
          time: child.val().time,
          opening: child.val().opening,
          opening2: child.val().opening2,
          content: child.val().content,
          state: child.val().state,
        };
        items.push(item);
        console.log('Key: ' + child.key);
      });
      this.setState({
        likes: items,
      });
      this.state.likes.map((item, idx) => {
        console.log('key: ' + item.id);
      });
    });
  };

  _delItem = key => {
    this.itemRef.child(key).remove();
  };

  componentDidMount() {
    this.listenForItems(this.itemRef);
  }

  render() {
    const {navigation} = this.props;
    const swipeOutLeft = {
      autoClose: true,
      right: {
        text: 'Xóa',
        type: 'delete',
        onPress: () => {
          Alert.alert(
            'Chú ý',
            'Bạn có chắc không?',
            [
              {
                text: 'Có',
                onPress: () => {
                  this._delItem(this.props.item.id);
                },
              },
              {text: 'Không', onPress: () => {}, style: 'cancel'},
            ],
            {cancelable: true},
          );
        },
      },
    };

    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#EBECF0',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FlatList
          data={this.state.likes}
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
              {/* Để ý cái đống ngoặc ở 'right' là {[{}]} chứ không phải {{}} */}
              <Swipeout
                right={[
                  {
                    text: 'Xóa',
                    type: 'delete',
                    onPress: () => {
                      Alert.alert(
                        'Chú ý',
                        'Bạn có chắc không?',
                        [
                          {
                            text: 'Có',
                            onPress: () => {
                              this._delItem(item.id);
                            },
                          },
                          {text: 'Không', onPress: () => {}, style: 'cancel'},
                        ],
                        {cancelable: true},
                      );
                    },
                  },
                ]}
                style={{borderRadius: hp('1.5%')}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate(
                      'FeedDetail',
                      {
                        id: item.id,
                        title: item.title,
                        time: item.time,
                        opening: item.opening,
                        opening2: item.opening2,
                        image: item.image,
                        content: item.content,
                        state: item.state,
                      },
                      console.log('key2: ' + item.id),
                    );
                  }}
                  style={{
                    flexDirection: 'row',
                    width: wp('89%'),
                    height: hp('13.5%'),
                    borderRadius: hp('1.5%'),
                    backgroundColor: '#EBECF0',
                    justifyContent: 'space-between',
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
                      height: hp('13.5%'),
                      width: wp('61%'),
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
                </TouchableOpacity>
              </Swipeout>
            </Neomorph>
          )}
          key={item => item.id}
        />
      </SafeAreaView>
    );
  }
}
