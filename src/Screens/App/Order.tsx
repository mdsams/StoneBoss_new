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
import GoBack from '../../Components/GoBack';

export default function Order() {
  const [productCode, setProductCode] = useState('');

  return (
    <ImageBackground
      source={Images.productAndBarCodeBackground}
      style={{flex: 1}}>
      <BlankSpacer height={hp(6)} />
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

      <BlankSpacer height={hp(8)} />

      <View
        style={{
          flexDirection: 'row',
          width: wp(90),
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: Colors.lightgray,
          opacity: 0.7,
          justifyContent: 'center',
          borderRadius: wp(0.5),
          height: hp(8),
        }}>
        <TextInput
          placeholder="Enter Sales Order#"
          style={[
            {
              paddingLeft: 11,
              width: wp(78),
              marginTop: wp(0.1),
              color: Colors.white,
              fontFamily: fonts.Montserrat,
            },
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
        text="CONTINUE"
        height={hp(6)}
        width={wp(63)}
        color={Colors.buttonRed}
        textColor={Colors.white}
        textFontFamily={fonts.Montserrat}
        // onPress={() => signOut()}
      />
    </ImageBackground>
  );
}
