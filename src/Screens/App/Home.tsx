import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

//Component Called
import BlankSpacer from '../../Components/BlankSpace';
import {Images, Colors, fonts} from '../../Components/Theme';
import {AuthContext, ctx} from '../../Constants/Context';
import Button from '../../Components/Button';

const Home = () => {
  const navigation = useNavigation();
  const {signOut} = useContext<ctx>(AuthContext);

  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <View>
        <View style={{marginTop: hp(3.5), marginLeft: wp(5)}}>
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
        <BlankSpacer height={hp(3)} />
        <View style={{alignItems: 'center'}}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ImageBackground
              source={Images.productBanner}
              style={{
                height: hp(30),
                width: wp(85),
              }}>
              <View
                style={{
                  alignItems: 'flex-end',
                  marginVertical: hp(10),
                }}>
                <View style={{marginRight: wp(4)}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginBottom: hp(2),
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
                  <View>
                    <Button
                      text="UPDATE BARCODE"
                      height={hp(6.5)}
                      width={wp(43)}
                      textFontSize={wp(3.5)}
                      color={Colors.buttonRed}
                      textColor={Colors.white}
                      textFontFamily={fonts.Montserrat}
                      onPress={() => navigation.navigate('ProductAndBarCode')}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <BlankSpacer height={hp(4)} />
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ImageBackground
              source={Images.orderBanner}
              style={{
                height: hp(30),
                width: wp(85),
              }}>
              <View
                style={{
                  alignItems: 'flex-end',
                  marginVertical: hp(10),
                }}>
                <View style={{marginRight: wp(4)}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginBottom: hp(2),
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
                  <View>
                    <Button
                      text="UPDATE ORDER"
                      height={hp(6.5)}
                      width={wp(43)}
                      textFontSize={wp(4)}
                      color={Colors.buttonRed}
                      textColor={Colors.white}
                      textFontFamily={fonts.Montserrat}
                      onPress={() => navigation.navigate('Order')}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <BlankSpacer height={hp(3)} />
          <Button
            text="LOG OUT"
            height={hp(7)}
            width={wp(83)}
            color={Colors.buttonRed}
            textColor={Colors.white}
            textFontFamily={fonts.Montserrat}
            onPress={() => signOut()}
            imageRight={Images.logout}
            imgHeight={wp(7)}
            imgWidth={wp(7)}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
