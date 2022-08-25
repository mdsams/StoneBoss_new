import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
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
          <Text style={{color: Colors.black}}>{props.data.BarCode}</Text>
          <Text style={{color: Colors.black, marginRight: wp(9)}}>
            {props.data.Quantity}
          </Text>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const OrderItemListing = () => {
  const navigation = useNavigation();
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
          <Text style={styles.textHeadingStyle}>BarCode#</Text>
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
            onPress={() => navigation.navigate('Home')}
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
