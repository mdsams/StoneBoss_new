import React, {useState} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Component Called
import {Colors, fonts, Images} from '../../../Components/Theme';
import BlankSpacer from '../../../Components/BlankSpace';
import Button from '../../../Components/Button';
import {GoBack} from '../../../Components/GoBack';
import ModalComponent from './ModalComponent';

export default function OrderItem() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <BlankSpacer height={hp(3)} />
      <GoBack padding={wp(9)} arrowColor={Colors.black} />
      <BlankSpacer height={hp(6)} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ImageBackground
          source={Images.orderItem}
          style={{
            height: hp(35),
            width: wp(90),
          }}
          imageStyle={{
            borderRadius: hp(5),
          }}
          resizeMode="stretch">
          <ImageBackground
            source={Images.rectangle}
            style={{
              height: hp(35),
              width: wp(90),
            }}
            imageStyle={{
              borderRadius: hp(5),
            }}>
            <BlankSpacer height={hp(6)} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 15,
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
                <Text style={styles.orderDetailsValue}>#bhvhjvbojojokhi</Text>
                <BlankSpacer height={hp(2)} />

                <Text style={styles.orderDetailsValue}>DAVID JHONSON</Text>
                <BlankSpacer height={hp(2)} />

                <Text style={styles.orderDetailsValue}>07/08/2022</Text>
                <BlankSpacer height={hp(2)} />

                <Text style={styles.orderDetailsValue}>$565.00</Text>
              </View>
            </View>
          </ImageBackground>
        </ImageBackground>
      </View>

      <BlankSpacer height={hp(7)} />
      <Button
        text="SCAN ITEMS"
        height={hp(6)}
        width={wp(63)}
        color={Colors.buttonRed}
        textColor={Colors.white}
        textFontFamily={fonts.Montserrat}
        onPress={() => setModalVisible(!modalVisible)}
      />
      {modalVisible ? (
        <ModalComponent
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
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
