import React, {useState} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

//Component Called
import {Colors, fonts, Images} from '../../../Components/Theme';
import BlankSpacer from '../../../Components/BlankSpace';
import Button from '../../../Components/Button';
import {GoBack} from '../../../Components/GoBack';
import ModalComponent from './ModalComponent';
import OrderItemListing from './OrderItemListing';

import {listData} from '../../offlineData/data';
import {dateFormat} from '../../../Constants/DateFormatter';

export default function OrderItem({route}: any) {
  const [modalVisible, setModalVisible] = useState(false);
  const {productDescription} = route.params;
  const requiredData = productDescription.order[0];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <BlankSpacer height={hp(1)} />
      <GoBack padding={wp(7)} arrowColor={Colors.black} />
      <BlankSpacer height={hp(2)} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ImageBackground
          source={Images.orderItem}
          style={{
            height: hp(28),
            width: wp(90),
          }}
          imageStyle={{
            borderRadius: hp(5),
          }}
          resizeMode="stretch">
          <ImageBackground
            source={Images.rectangle}
            style={{
              height: hp(28),
              width: wp(90),
            }}
            imageStyle={{
              borderRadius: hp(5),
            }}>
            <BlankSpacer height={hp(4)} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
              }}>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <Text style={styles.orderDetailsType}>Order No.</Text>
                <BlankSpacer height={hp(2)} />

                <Text style={styles.orderDetailsType}>Customer Name</Text>
                <BlankSpacer height={hp(2)} />

                <Text style={styles.orderDetailsType}>Date Of Order</Text>
                <BlankSpacer height={hp(2)} />

                <Text style={styles.orderDetailsType}>Total Amount</Text>
              </View>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.orderDetailsValue}>
                  {requiredData['sales order']}
                </Text>
                <BlankSpacer height={hp(2)} />

                <Text style={styles.orderDetailsValue}>
                  {requiredData['Customer Name']}
                </Text>
                <BlankSpacer height={hp(2)} />

                <Text style={styles.orderDetailsValue}>
                  {dateFormat(requiredData['Order Date'], 'dd-MM-yyyy')}
                </Text>
                <BlankSpacer height={hp(2)} />

                <Text style={styles.orderDetailsValue}>
                  ${requiredData?.Total}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </ImageBackground>
      </View>

      <BlankSpacer height={hp(4)} />
      <Button
        text="SCAN ITEMS"
        height={hp(6)}
        width={wp(63)}
        color={Colors.buttonRed}
        textColor={Colors.white}
        textFontFamily={fonts.Montserrat}
        onPress={() => setModalVisible(!modalVisible)}
      />
      <BlankSpacer height={hp(4)} />
      {modalVisible ? (
        <ModalComponent
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          itemsData={requiredData.items}
        />
      ) : null}
      {listData[0] !== undefined ? (
        <OrderItemListing requiredData={requiredData} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  orderDetailsType: {
    marginLeft: wp(2),
    fontFamily: fonts.Montserrat,
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.white,
  },
  orderDetailsValue: {
    marginRight: wp(4),
    fontFamily: fonts.Oswald,
    fontSize: 16,
    color: Colors.white,
  },
});
