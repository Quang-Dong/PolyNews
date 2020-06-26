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
        console.log('child ICT: ' + child.val().title);
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

  setDB() {
    this.itemsRef.set({
      3: 'Sport',
    });
  }

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
            shadowRadius: (4 / stHeight) * height,
            borderRadius: (15 / stHeight) * height,
            backgroundColor: '#EBECF0',
            width: (510 / stWidth) * width,
            height: (750 / stHeight) * height,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Neomorph
            inner
            swapShadows // <- change zIndex of each shadow color
            style={{
              shadowRadius: (4 / stHeight) * height,
              borderRadius: (15 / stHeight) * height,
              backgroundColor: '#EBECF0',
              width: (510 / stWidth) * width,
              height: (750 / stHeight) * height,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <SafeAreaView style={{backgroundColor: '#EBECF0', margin: 10}}>
              <FlatList
                data={this.state.feeds}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={{marginBottom: 30}}
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
                        height: (200 / stHeight) * height,
                        width: width - (59 / stWidth) * width,
                        flex: 4,
                        borderRadius: 10,
                      }}
                    />
                    <View style={{flex: 1}}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: '#5F6571',
                          fontSize: 14,
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
