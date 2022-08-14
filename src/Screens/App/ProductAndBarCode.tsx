import React, {useState} from 'react';
import {View, Text, ImageBackground, Image, TextInput} from 'react-native';
import {Images, Colors, fonts} from '../../Components/Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import BlankSpacer from '../../Components/BlankSpace';
import Input from '../../Components/Input';
import Button from '../../Components/Button';

export default function ProductAndBarCode() {
  //   console.log('rendered');
  const [productCode, setProductCode] = useState('');

  return (
    <ImageBackground
      source={Images.productAndBarCodeBackground}
      style={{flex: 1}}>
      <BlankSpacer height={hp(7)} />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
          alignSelf: 'center',
          borderRadius: wp(5),
          marginVertical: wp(2),
        }}>
        <Image
          source={Images.stoneBossImage}
          style={{
            height: wp(45),
            width: wp(45),
          }}
        />
      </View>

      <BlankSpacer height={hp(10)} />

      <View
        style={{
          flexDirection: 'row',
          width: wp(90),
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: Colors.lightBlue,
          justifyContent: 'center',
          borderRadius: wp(0.5),
          height: hp(8),
        }}>
        <TextInput
          placeholder="Enter Product Details"
          style={[
            {
              // height: hp(7),
              paddingLeft: 11,
              // color: Colors.black,
              // fontSize: hp(1.9),
              // fontFamily: fonts.PoppinsLight,
              width: wp(78),
              marginTop: wp(0.1),
            },
            //   {width: wp(77)},
          ]}
          underlineColorAndroid="transparent"
          placeholderTextColor={Colors.lightgray}
        />
      </View>
      <BlankSpacer height={hp(5)} />

      <View
        style={{
          flexDirection: 'row',
          width: wp(90),
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: '#C4C4C4',
          //   opacity: 0.5,
          justifyContent: 'center',
          borderRadius: wp(0.5),
          height: hp(8),
        }}>
        <TextInput
          placeholder="Enter Product Details"
          style={[
            {
              // height: hp(7),
              paddingLeft: 11,
              // color: Colors.black,
              // fontSize: hp(1.9),
              fontFamily: fonts.PoppinsLight,
              width: wp(78),
              marginTop: wp(0.1),
            },
            //   {width: wp(77)},
          ]}
          underlineColorAndroid="transparent"
          placeholderTextColor={Colors.white}
        />
        <Image
          source={Images.barcode}
          style={{
            width: wp(7),
            height: wp(7),
          }}
          resizeMode="contain"
        />
      </View>
      <BlankSpacer height={hp(5)} />

      <Button
        text="SAVE & CONTINUE"
        height={hp(6)}
        width={wp(63)}
        color={Colors.buttonRed}
        textColor={Colors.white}
        textFontFamily={fonts.PoppinsMedium}
        // onPress={() => signOut()}
      />
      <BlankSpacer height={hp(15)} />
      <Button
        text="PREVIEW"
        height={hp(7)}
        width={wp(80)}
        color={Colors.buttonRed}
        textColor={Colors.white}
        textFontFamily={fonts.PoppinsMedium}
      />
    </ImageBackground>
  );
}
