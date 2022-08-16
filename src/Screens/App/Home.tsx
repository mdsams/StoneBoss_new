import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Component Called
import BlankSpacer from '../../Components/BlankSpace';
import {Images, Colors, fonts} from '../../Components/Theme';
import {AuthContext, ctx} from '../../Constants/Context';
import Button from '../../Components/Button';

const Home = () => {
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
                      text="Update Barcode"
                      height={hp(6.5)}
                      width={wp(43)}
                      color={Colors.buttonRed}
                      textColor={Colors.white}
                      textFontFamily={fonts.Montserrat}
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
                      text="Update Order"
                      height={hp(6.5)}
                      width={wp(43)}
                      color={Colors.buttonRed}
                      textColor={Colors.white}
                      textFontFamily={fonts.Montserrat}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <BlankSpacer height={hp(3)} />
          <Button
            text="LogOut"
            height={hp(7)}
            width={wp(75)}
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
