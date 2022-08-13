import React, {useCallback} from 'react';
import {View, TextInput, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors, fonts} from './Theme';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface InputType {
  placeholder: string;
  rightImage: string;
  leftImage: string;
  rightImageStyle: any;
  leftImageStyle: any;
  height: string | number;
  width: string | number;
  alignSelf: string;
  borderRadius: string | number;
  color: string;
  placeholderColor: string;
  secureTextEntry: boolean;
  keyboardType: string;
  textSize: string | number;
  borderColor: string;
  value: string | number;
  onChangeInput: string | number;
  maxlength: number;
  hidePass: boolean;
  setHidePass: (value: string) => void;
}

function Input({
  placeholder,
  rightImage,
  leftImage,
  rightImageStyle,
  leftImageStyle,
  height = hp(8.2),
  width = wp(90),
  alignSelf = 'center',
  borderRadius = wp(2),
  color = Colors.white,
  placeholderColor = Colors.white,
  secureTextEntry = false,
  keyboardType = 'default',
  textSize = wp(4),
  borderColor = Colors.white,
  value,
  onChangeInput,
  maxlength,
  hidePass,
  setHidePass,
}: any) {
  /**
   * enum("default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad',
   * 'decimal-pad', 'twitter', 'web-search', 'visible-password')
   * Determines which keyboard to open, e.g.numeric.
   * The following values work across platforms: - default - numeric - email-address - phone-pad
   * The following values work on iOS: - ascii-capable - numbers-and-punctuation - url - number-pad - name-phone-pad - decimal-pad - twitter - web-search
   * The following values work on Android: - visible-password
   */

  const showHidePass = (val: boolean) => {
    setHidePass(!val);
  };

  const onChangeText = useCallback((data: string) => {
    onChangeInput(data);
  }, []); // No dependencies

  const _keyboardType = keyboardType;
  return (
    <View
      style={{
        height: height,
        width: width,
        borderColor: borderColor,
        borderWidth: 1,
        borderRadius: borderRadius,
        alignSelf: alignSelf,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      {leftImage ? (
        <Image
          source={leftImage}
          style={[
            {
              height: wp(6.6),
              width: wp(6.6),
              marginLeft: wp(5),
            },
            leftImageStyle,
          ]}
        />
      ) : null}

      <TextInput
        placeholder={placeholder ? placeholder : 'placeholder'}
        style={{
          fontSize: textSize,
          fontFamily: fonts.PoppinsRegular,
          flex: 1,
          marginHorizontal: wp(3),
          paddingHorizontal: wp(2),
          color: color,
        }}
        placeholderTextColor={placeholderColor}
        secureTextEntry={secureTextEntry}
        keyboardType={_keyboardType}
        value={value}
        maxLength={maxlength}
        onChangeText={onChangeText}
      />
      {rightImage ? (
        <TouchableOpacity
          style={{
            height: hp(6),
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => showHidePass(hidePass)}>
          <Image
            source={rightImage}
            style={[
              {
                height: wp(7),
                width: wp(7),
                marginRight: wp(5),
              },
              rightImageStyle,
            ]}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

export default React.memo(Input);
