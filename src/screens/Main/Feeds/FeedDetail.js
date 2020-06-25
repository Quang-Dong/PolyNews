import React, {Component} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';

import pic from '../../../assets/images/pic2.png';

import Icon from 'react-native-vector-icons/AntDesign';

import {Neomorph, Shadow} from 'react-native-neomorph-shadows';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

export default class FeedDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {height, width} = Dimensions.get('window');

    const stWidth = 540; //Standard Width
    const stHeight = 936; // Standard Height

    const {route} = this.props;
    const {itemId} = route.params;
    const {title} = route.params;
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
                style={{width: (470 / stWidth) * width, marginVertical: 15}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#5F6571',
                    fontSize: 24,
                  }}>
                  Lộ diện hình ảnh các ăng ten dành cho mạng internet vệ tinh
                  Starlink
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: (470 / stWidth) * width,
                  marginBottom: 15,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon name="clockcircleo" size={16} color="gray" />
                  <Text style={{color: 'gray', marginLeft: 5}}>24/06/2020</Text>
                </View>
                <TouchableOpacity style={{alignSelf: 'flex-end'}}>
                  <Icon name="heart" size={16} color="red" />
                </TouchableOpacity>
              </View>

              <View style={{width: (470 / stWidth) * width}}>
                <Text
                  style={{
                    color: '#5F6571',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  Đây là lần đầu tiên những hình ảnh rõ ràng như vậy về các ăng
                  ten của mạng internet vệ tinh Starlink lộ diện.
                </Text>
              </View>

              <View style={{width: (470 / stWidth) * width, marginTop: 15}}>
                <Text
                  style={{
                    color: '#5F6571',
                    fontSize: 18,
                  }}>
                  Dự án phát internet từ vệ tinh của SpaceX đang dần thành hình
                  nhưng người dùng có lẽ vẫn chưa hiểu làm thế nào họ có thể sử
                  dụng dịch vụ internet tốc độ cao này. Tuy nhiên, một số hình
                  ảnh mới xuất hiện trên Reddit đang cho thấy, những ăng ten đón
                  tín hiệu internet từ các vệ tinh Starlink sẽ trông như thế
                  nào. Nếu Starlink đạt đến quy mô như ông Elon Musk mô tả, công
                  ty SpaceX sẽ mang lại doanh thu hàng chục tỷ USD mỗi năm khi
                  đưa mọi người kết nối với đường truyền internet tốc độ cao, độ
                  trễ thấp từ gần như bất cứ nơi nào trên bề mặt trái đất.
                </Text>
              </View>
              <Image
                source={pic}
                style={{
                  height: (260 / stHeight) * height,
                  width: (470 / stWidth) * width,
                  borderRadius: 10,
                  marginVertical: 10,
                }}
              />
              <View style={{width: (470 / stWidth) * width, marginTop: 15}}>
                <Text
                  style={{
                    color: '#5F6571',
                    fontSize: 18,
                  }}>
                  Trong khi SpaceX đã đăng tải nhiều hình ảnh và video về các vệ
                  tinh cũng như hệ thống tên lửa của mình, công ty lại chưa từng
                  tiết lộ về các ăng ten dưới mặt đất của mình. Tuy nhiên, các
                  hình ảnh vừa được người dùng Reddit, Darkpenguin22 đăng tải
                  cho thấy đây chính là những thiết bị có thể giao tiếp với các
                  vệ tinh của Starlink. Vị trí của các thiết bị này cũng trùng
                  khớp với địa điểm thử nghiệm của SpaceX. Các bức ảnh này cho
                  thấy có 2 loại ăng ten kết nối với Starlink. Một loại được
                  chụp bảo vệ bên ngoài bằng một quả cầu trắng có đường kính
                  khoảng 1,5m, loại ăng ten còn lại có kích thước nhỏ gọn hơn và
                  lịch sự hơn – chiếc đĩa ở trên chỉ tương đương cái pizza cỡ
                  vừa – loại ăng ten này từng được ông Musk mô tả trông như "một
                  chiếc UFO gắn trên một cây gậy". Trước đây đã từng có các hình
                  ảnh cho thấy những nguyên mẫu thiết bị mặt đất của Starlink
                  xuất hiện tại Boca Chica, Texas, nơi SpaceX phát triển hệ
                  thống phóng chiếc Starship của mình, nhưng các hình ảnh mới là
                  cái nhìn rõ ràng nhất về các thiết bị này.
                </Text>
              </View>
            </ScrollView>
          </Neomorph>
        </Neomorph>
      </View>
    );
  }
}
