import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

//Components Called
import {Colors, fonts} from '../../../Components/Theme';
import {listData} from '../../offlineData/data';
import Button from '../../../Components/Button';
import BlankSpacer from '../../../Components/BlankSpace';

//API Call
import {updateOrderDetails} from '../../../Controller/appController';

const ProductDetails = (props: any) => {
  return (
    <GestureHandlerRootView>
      <Swipeable>
        <View
          style={[
            styles.container,
            {
              backgroundColor: 'transparent',
            },
          ]}>
          <Text style={{color: Colors.black}}>{props.data.prodCode}</Text>
          <Text style={{color: Colors.black, marginRight: wp(9)}}>
            {props.data.quantity}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: Colors.black,
              marginLeft: wp(5),
              marginBottom: hp(1.5),
            }}>
            {props.data.ProductDescription}
          </Text>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const OrderItemListing = ({requiredData}: any) => {
  const navigation = useNavigation();
  const finishOrderUpdate = async () => {
    //Deleting the ProductDescription value as the API doesn't need this value
    listData.forEach((object: any) => {
      delete object['ProductDescription'];
    });
    const data = await updateOrderDetails(
      requiredData['sales order'],
      listData,
      requiredData?.Location,
    );
    if (data?.serverResponse?.code === 200) {
      //Removing all the Data from the Array
      while (listData.length > 0) {
        listData.pop();
      }
      Alert.alert('Order updated successfully');
      navigation.navigate('Home');
    }
  };

  return (
    <>
      <View style={{padding: 15}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: wp(4),
            paddingRight: wp(4),
          }}>
          <Text style={styles.textHeadingStyle}>Product Code</Text>
          <Text style={styles.textHeadingStyle}>Quantity</Text>
        </View>
        <View style={{padding: 6, height: hp(37)}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={listData}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    backgroundColor:
                      index % 2 <= 0 ? Colors.lightgray : Colors.white,
                  }}>
                  <ProductDetails data={item} />
                </View>
              );
            }}
            ItemSeparatorComponent={() => {
              return <View style={{height: 1}}></View>;
            }}
          />
          <BlankSpacer height={hp(2)} />
          <Button
            text="FINISH"
            height={hp(6)}
            width={wp(87)}
            color={Colors.buttonRed}
            textColor={Colors.white}
            textFontFamily={fonts.Montserrat}
            onPress={() => finishOrderUpdate()}
          />
        </View>
      </View>
    </>
  );
};

export default OrderItemListing;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp(7),
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    padding: 16,
  },

  textHeadingStyle: {
    color: Colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: fonts.Montserrat,
  },
});
