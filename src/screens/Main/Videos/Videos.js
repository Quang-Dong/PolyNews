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

import pic from '../../../assets/images/pic1.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Videos extends Component {
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
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#EBECF0',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FlatList
          data={DATA}
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
                  source={pic}
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
                      Lộ diện hình ảnh các ăng ten dành cho mạng internet vệ
                      tinh Starlink
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'flex-end',
                    }}>
                    <Text style={{color: '#CBCDD4', fontWeight: 'bold'}}>
                      10 May 6:00 AM
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
