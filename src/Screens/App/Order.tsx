import React, {useState} from 'react';
import {View, ImageBackground, Image, TextInput, Alert} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

//Component Called
import {Images, Colors, fonts} from '../../Components/Theme';
import BlankSpacer from '../../Components/BlankSpace';
import Button from '../../Components/Button';
import {GoBack} from '../../Components/GoBack';

//API Called
import {getOrderDetails} from '../../Controller/appController';

export default function Order() {
  const navigation = useNavigation();
  const [salesOrder, setSalesOrder] = useState('');

  const OrderDetails = async () => {
    if (salesOrder !== '') {
      const productDescription = await getOrderDetails(salesOrder);
      if (productDescription?.order.length !== 0) {
        navigation.navigate('OrderItem', {productDescription});
        setSalesOrder('');
        console.log(productDescription.order);
      } else {
        Alert.alert('Order Not Found');
      }
    }
  };

  return (
    <ImageBackground
      source={Images.productAndBarCodeBackground}
      style={{flex: 1}}>
      <BlankSpacer height={hp(1)} />
      <GoBack padding={wp(9)} />
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
          keyboardType="number-pad"
          placeholderTextColor={Colors.white}
          value={salesOrder}
          onChangeText={setSalesOrder}
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
        onPress={() => OrderDetails()}
      />
    </ImageBackground>
  );
}
