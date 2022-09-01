import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  Image,
  TextInput,
  Alert,
  Text,
} from 'react-native';
import {Images, Colors, fonts} from '../../Components/Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {useIsFocused} from '@react-navigation/native';

//Components called
import BlankSpacer from '../../Components/BlankSpace';
import Button from '../../Components/Button';
import {GoBack} from '../../Components/GoBack';

//offline Data
import {data} from '../offlineData/data';

//API url
import {getProductDetails} from '../../Controller/appController';

export default function ProductAndBarCode() {
  //useIsFocused is being used for component re-render on clicking navigation.goack()
  useIsFocused();

  const navigation = useNavigation();
  const [productCode, setProductCode] = useState('');
  const [barCode, setBarCode] = useState('');

  //function for pushing the data in array
  const dataPush = async () => {
    if (productCode !== '' && barCode !== '') {
      const productDescription = await getProductDetails(productCode);
      if (!productDescription) {
        Alert.alert('Product Not Found');
      }
      if (productDescription !== undefined) {
        const requiredProductDescription = productDescription.find(
          (x: any) => x.ProdCode === productCode,
        );
        data.push({
          ProdCode: productCode,
          BarCode: barCode,
          ProductDescription: requiredProductDescription.Description,
        });
      }
      setProductCode('');
      setBarCode('');
    } else {
      Alert.alert('Product or Barcode Field in empty');
    }
  };

  return (
    <ImageBackground
      source={Images.productAndBarCodeBackground}
      style={{flex: 1}}>
      <BlankSpacer height={hp(1)} />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <GoBack padding={wp(6)} paddingTop={wp(0.5)} />
        <View style={{marginRight: wp(8), marginTop: hp(2)}}>
          <Image
            source={Images.cart}
            style={{
              height: wp(12),
              width: wp(12),
              tintColor: Colors.offWhite,
            }}
          />
          <View
            style={{
              height: wp(8),
              width: wp(8),
              backgroundColor: Colors.red,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: -wp(2.2),
              right: -wp(4),
              borderColor: Colors.white,
              borderWidth: 1.5,
            }}>
            <Text
              style={{
                color: Colors.white,
                fontSize: 20,
                fontWeight: 'bold',
                fontFamily: fonts.Montserrat,
              }}>
              {data.length}
            </Text>
          </View>
        </View>
      </View>
      <BlankSpacer height={hp(3)} />
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
      <BlankSpacer height={hp(5)} />
      <View
        style={{
          flexDirection: 'row',
          width: wp(90),
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: Colors.white,
          opacity: 0.5,
          justifyContent: 'center',
          borderRadius: wp(0.5),
          height: hp(8),
        }}>
        <TextInput
          placeholder="Enter Product Code"
          placeholderTextColor={Colors.white}
          style={{
            paddingLeft: 11,
            width: wp(88),
            marginTop: wp(0.1),
            color: Colors.white,
            fontFamily: fonts.Montserrat,
          }}
          value={productCode}
          onChangeText={text => setProductCode(text.trim())}
        />
      </View>
      <BlankSpacer height={hp(5)} />
      <View
        style={{
          flexDirection: 'row',
          width: wp(90),
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: Colors.lightgray,
          opacity: 0.5,
          justifyContent: 'center',
          borderRadius: wp(0.5),
          height: hp(8),
        }}>
        <TextInput
          placeholder="Enter Barcode"
          placeholderTextColor={Colors.white}
          style={{
            paddingLeft: 11,
            width: wp(78),
            marginTop: wp(0.1),
            color: Colors.white,
            fontFamily: fonts.Montserrat,
          }}
          value={barCode}
          onChangeText={setBarCode}
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
        textFontSize={wp(4)}
        height={hp(6)}
        width={wp(60)}
        color={Colors.buttonRed}
        textColor={Colors.white}
        textFontFamily={fonts.Montserrat}
        onPress={() => dataPush()}
      />
      <BlankSpacer height={hp(14)} />
      <Button
        text="PREVIEW"
        height={hp(7)}
        width={wp(87)}
        color={Colors.buttonRed}
        textColor={Colors.white}
        textFontFamily={fonts.Montserrat}
        onPress={() => navigation.navigate('ProductListing')}
      />
    </ImageBackground>
  );
}
