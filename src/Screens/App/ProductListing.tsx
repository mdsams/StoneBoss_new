import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

//Components Called
import {Colors, fonts, Images} from '../../Components/Theme';
import {GoBack} from '../../Components/GoBack';
import BlankSpacer from '../../Components/BlankSpace';
import Button from '../../Components/Button';
import {data} from '../offlineData/data';

const ProductDetails = (props: any, index: any) => {
  const rightSwipe = (progress: any, dragX: any) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity
        onPress={() => {
          props.handleDelete();
        }}
        activeOpacity={0.6}>
        <View
          style={{
            backgroundColor: Colors.red,
            justifyContent: 'center',
            alignItems: 'center',
            width: wp(20),
            height: hp(8),
          }}>
          <Image source={Images.delete} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={rightSwipe}>
        <View
          style={[
            styles.container,
            {
              backgroundColor:
                props.data.id % 2 <= 0 ? Colors.lightgray : Colors.white,
            },
          ]}>
          <Text style={{color: Colors.black}}>{props.data.ProductCode}</Text>
          <Text style={{color: Colors.black, marginRight: wp(9)}}>
            {props.data.Barcode}
          </Text>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const ProductListing = () => {
  const navigation = useNavigation();
  const [lists, setLists] = useState(data);
  console.log('+++++++++++++++++++++++++++', lists);

  const deleteItem = (index: any) => {
    const arr = [...lists];
    arr.splice(index, 1);
    setLists(arr);
  };
  return (
    <>
      <BlankSpacer height={hp(1)} />
      <GoBack padding={wp(9)} arrowColor={Colors.black} />
      <BlankSpacer height={hp(3)} />
      <View style={{padding: 15}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: wp(4),
            paddingRight: wp(15),
          }}>
          <Text style={styles.textHeadingStyle}>Product Code</Text>
          <Text style={styles.textHeadingStyle}>Barcode#</Text>
        </View>
        <View style={{padding: 6, height: hp(70)}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={lists}
            renderItem={({item, index}) => {
              return (
                <View>
                  <ProductDetails
                    data={item}
                    handleDelete={() => deleteItem(index)}
                  />
                </View>
              );
            }}
            ItemSeparatorComponent={() => {
              return <View style={{height: 1}}></View>;
            }}
          />
        </View>
      </View>
      <Button
        text="FINISH"
        height={hp(7)}
        width={wp(80)}
        color={Colors.buttonRed}
        textColor={Colors.white}
        textFontFamily={fonts.Montserrat}
        onPress={() => navigation.navigate('Home')}
      />
    </>
  );
};

export default ProductListing;

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
