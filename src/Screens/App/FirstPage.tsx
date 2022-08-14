import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';

import BlankSpacer from '../../Components/BlankSpace';
import {Images, Colors, fonts} from '../../Components/Theme';
import {AuthContext, ctx} from '../../Constants/Context';
import Button from '../../Components/Button';

const Home = () => {
  const navigation = useNavigation();
  const {signOut, State} = useContext<ctx>(AuthContext);

  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <View>
        <View style={{marginTop: '7%', marginLeft: '5%'}}>
          <Text
            style={{
              fontSize: 18,
              color: Colors.buttonRed,
              fontFamily: fonts.Montserrat,
            }}>
            Good Morning
          </Text>
          <Text
            style={{
              fontSize: 40,
              color: Colors.black,
              fontFamily: fonts.Oswald,
              letterSpacing: -2,
            }}>
            DAVID JHONSON
          </Text>
        </View>
        <BlankSpacer height={hp(5)} />
        <View style={{alignItems: 'center'}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={Images.productBanner} />
            <View
              style={{
                position: 'absolute',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image source={Images.productIcon} />
                <Text
                  style={{
                    fontSize: 25,
                    fontFamily: fonts.Oswald,
                    color: Colors.white,
                    alignSelf: 'center',
                    marginLeft: 5,
                  }}>
                  Products
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: Colors.buttonRed,
                  height: hp(6),
                  width: wp(50),
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: Colors.white,
                  }}>
                  Update Barcode
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <BlankSpacer height={hp(4)} />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image source={Images.orderBanner} />
            <View
              style={{
                position: 'absolute',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image source={Images.orderIcon} />
                <Text
                  style={{
                    fontSize: 25,
                    fontFamily: fonts.Oswald,
                    color: Colors.white,
                    alignSelf: 'center',
                    marginLeft: 5,
                  }}>
                  Order
                </Text>
              </View>

              <TouchableOpacity
                style={{
                  backgroundColor: Colors.buttonRed,
                  height: hp(6),
                  width: wp(50),
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    color: Colors.white,
                  }}>
                  Update Order
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <BlankSpacer height={hp(2)} />
          <Button
            text="LogOut"
            height={hp(6)}
            width={wp(63)}
            color={Colors.buttonRed}
            textColor={Colors.white}
            textFontFamily={fonts.Montserrat}
            onPress={() => signOut()}
            imageRight={Images.logout}
            imgHeight={wp(6)}
            imgWidth={wp(6)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 70,
    height: 70,
  },
  viewStyle: {
    margin: '7%',
    borderRadius: 10,
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 22,
    color: 'black',
    alignSelf: 'center',
    marginLeft: 20,
  },
});

export default Home;
