import React from 'react';
import reactCSS from 'reactcss';
import {TouchableOpacity, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Images, fonts, Colors} from './Theme';

interface Props {
  color: string;
  text: string;
  width: number;
  height: number;
  borderRadius: number;
  image: any;
  textColor: any;
  isImage: any;
  textFontSize: any;
  textFontFamily: any;
  tintColor: any;
  shadow: any;
  imgWidth: number;
  imgHeight: number;
  circleView: boolean;
  imageLeft: boolean;
  imageRight: boolean;
  borderWidth: any;
  borderColor: string;
  onPress: any;
  alignSelf: string;
}

const Button = ({
  color,
  text,
  imageLeft,
  imageRight,
  borderWidth,
  borderColor,
  isImage,
  textFontSize,
  textFontFamily,
  textColor,
  borderRadius,
  width,
  height,
  tintColor,
  shadow,
  imgWidth,
  imgHeight,
  circleView,
  onPress,
  alignSelf = 'center',
  ...props
}: any) => {
  const styles = reactCSS({
    default: {
      container: {
        width: width ? width : wp(90),
        height: height ? height : hp(6.3),
        backgroundColor: color ? color : Colors.saloginbtnback,
        justifyContent: imageLeft || imageRight ? 'space-between' : 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: borderRadius ? borderRadius : wp(2),
        alignSelf: alignSelf,
        borderWidth: borderWidth ? borderWidth : null,
        borderColor: borderColor ? borderColor : null,
        paddingHorizontal: imageLeft || imageRight ? wp(20) : 0,
      },
      shadowEffwct: {
        // shadowColor: color?color:'transparent',
        // shadowOffset: { width: 0, height: 3 },
        // shadowOpacity: .1,
        // shadowRadius: wp(5),
        // elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.51,
        shadowRadius: 10,
        elevation: 15,
        backgroundColor: color ? color : 'transparent',
      },
      text: {
        color: textColor ? textColor : '#fff',
        fontSize: textFontSize ? textFontSize : wp(4.4),
        fontFamily: textFontFamily ? textFontFamily : fonts.Montserrat,
        // textAlign: 'center',
      },
    },
  });

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, shadow ? styles.shadowEffwct : null]}
      onPress={onPress}>
      {imageLeft ? (
        <Image
          source={imageLeft}
          resizeMode="cover"
          style={{
            width: imgWidth ? imgWidth : wp(5),
            height: imgHeight ? imgHeight : wp(5),
            marginRight: wp(2),
            tintColor: tintColor ? tintColor : null,
          }}></Image>
      ) : null}

      {text && <Text style={styles.text}>{text || 'Button'}</Text>}

      {isImage && (
        <Image
          source={isImage}
          resizeMode="contain"
          style={{
            width: wp(4),
            height: wp(5),
            tintColor: tintColor ? tintColor : null,
          }}
        />
      )}

      {imageRight ? (
        <Image
          source={imageRight}
          resizeMode="cover"
          style={{
            width: imgWidth ? imgWidth : 0,
            height: imgHeight ? imgHeight : 0,
            marginLeft: wp(2),
            tintColor: tintColor ? tintColor : null,
          }}
        />
      ) : null}
    </TouchableOpacity>
  );
};
export default Button;
