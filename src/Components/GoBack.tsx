import {View, TouchableOpacity, Image, Text} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, fonts, Images} from './Theme';
import {useNavigation} from '@react-navigation/native';

interface goBackProps {
  padding?: number;
  title?: string;
  rightText?: string;
  arrowColor?: string;
  paddingBottom?: number;
  paddingTop?: number;
}

export const GoBack = ({
  padding,
  title,
  rightText,
  arrowColor,
  paddingBottom,
  paddingTop,
}: goBackProps) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        padding: padding,
        paddingBottom: paddingBottom ? paddingBottom : wp(2),
        paddingTop: paddingTop ? paddingTop : undefined,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          height: wp(1),
          width: wp(1),
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.goBack()}>
        <Image source={Images.back} style={{tintColor: arrowColor}} />
      </TouchableOpacity>
      {title ? (
        <Text
          style={{
            fontFamily: fonts.Oswald,
            fontSize: wp(3.8),
            color: Colors.textColor,
            marginLeft: wp(5),
          }}>
          {title}
        </Text>
      ) : null}
      {rightText ? (
        <Text
          style={{
            fontFamily: fonts.Oswald,
            fontSize: wp(3.3),
            color: Colors.textColor,
            marginLeft: 'auto',
          }}>
          {rightText}
        </Text>
      ) : null}
    </View>
  );
};
