import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
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

//API Calling
import {postProductDetails} from '../../Controller/appController';

const ProductDetails = (props: any) => {
  const rightSwipe = () => {
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
            height: hp(11),
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
              backgroundColor: 'transparent',
            },
          ]}>
          <Text style={{color: Colors.black}}>{props.data.ProdCode}</Text>
          <Text style={{color: Colors.black, marginRight: wp(2)}}>
            {props.data.BarCode}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: Colors.black,
              marginLeft: wp(4),
              marginBottom: hp(1),
            }}>
            {props.data.ProductDescription}
          </Text>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

const ProductListing = () => {
  const navigation = useNavigation();
  const [lists, setLists] = useState(data);

  const FinishPostProductDetails = async () => {
    lists.forEach((object: any) => {
      delete object['ProductDescription'];
    });
    const data = await postProductDetails(lists);
    if (data?.serverResponse?.code === 200) {
      while (lists.length > 0) {
        lists.pop();
      }
      Alert.alert('Update Product Successfully ');
      navigation.navigate('Home');
    }
  };

  const deleteItem = (index: any) => {
    const arr = [...lists];
    data.splice(index, 1);
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
            paddingRight: wp(4),
          }}>
          <Text style={styles.textHeadingStyle}>Product Code</Text>
          <Text style={styles.textHeadingStyle}>BarCode#</Text>
        </View>
        <View style={{padding: 6, height: hp(70)}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={lists}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    backgroundColor:
                      index % 2 <= 0 ? Colors.lightgray : Colors.white,
                  }}>
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
        // onPress={() => navigation.navigate('Home')}
        onPress={() => FinishPostProductDetails()}
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
