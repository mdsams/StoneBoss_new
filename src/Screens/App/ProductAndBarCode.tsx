import React, {useState} from 'react';
import {View, ImageBackground, Image, TextInput} from 'react-native';
import {Images, Colors, fonts} from '../../Components/Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

//Components called
import BlankSpacer from '../../Components/BlankSpace';
import Button from '../../Components/Button';
import {GoBack} from '../../Components/GoBack';

//offline Data
import {data} from '../offlineData/data';

//API url
import {getProductDetails} from '../../Controller/appController';

export default function ProductAndBarCode() {
  const navigation = useNavigation();
  const [productCode, setProductCode] = useState('');
  const [barCode, setBarCode] = useState('');

  //function for pushing the data in array
  const dataPush = async () => {
    if (productCode !== '' || barCode !== '') {
      const productDescription = await getProductDetails(productCode);
      console.log('=========', productDescription);
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
    }
  };

  return (
    <ImageBackground
      source={Images.productAndBarCodeBackground}
      style={{flex: 1}}>
      <BlankSpacer height={hp(1)} />
      <GoBack padding={wp(6)} />
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
          onChangeText={setProductCode}
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
          placeholder="Enter BarCode"
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
