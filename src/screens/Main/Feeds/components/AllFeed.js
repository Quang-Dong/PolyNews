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

import pic from '../../../../assets/images/pic1.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class AllFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {height, width} = Dimensions.get('window');

    const stWidth = 540; //Standard Width
    const stHeight = 936; // Standard Height

    const DATA = [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
    ];
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
                data={DATA}
                renderItem={({item}) => (
                  <TouchableOpacity style={{marginBottom: 30}}>
                    <Image
                      source={pic}
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
                        Lộ diện hình ảnh các ăng ten dành cho mạng internet vệ
                        tinh Starlink
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
