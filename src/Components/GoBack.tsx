import React from 'react';
import reactCSS from 'reactcss';
import {Images, Colors, fonts} from '../Components/Theme';
import {
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  View,
  useColorScheme,
  Platform,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

interface Props {
  style: any;
  width?: number;
  height?: number;
  image: any;
  textColor: any;
  isSkip: boolean;
}

const GoBack = ({image, height, width, textColor, isSkip, ...props}: Props) => {
  const styles = reactCSS({
    default: {
      container: {
        height: hp(11),
        width: wp(100),
        // backgroundColor:theme=== 'light'?Colors.white: Colors.grey,
        // alignItems: 'center',
        // justifyContent: 'space-between',
        // flexDirection: 'row',
        paddingHorizontal: wp(5),
      },

      backContainer: {
        height: height ? height : wp(10),
        width: width ? width : wp(10),
        // alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: wp(2),
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 15,
      },

      skipContainer: {
        height: hp(5),
        width: wp(20),
        // backgroundColor:theme=== 'light'?Colors.white: Colors.grey,
        // alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: wp(2),
        borderWidth: wp(0.2),
        borderColor: Colors.gray,
      },

      text: {
        color: Colors.gray,
        fontSize: hp(2),
        // fontFamily: fonts.PoppinsRegular,
        // textAlign: 'center',
      },
    },
  });
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}>
        <Image
          source={Images.goBack}
          resizeMode={'contain'}
          style={{
            height: wp(4.5),
            width: wp(4.7),
            tintColor: Colors.white,
          }}
        />
      </TouchableOpacity>

      {isSkip && (
        <TouchableOpacity
          style={styles.skipContainer}
          onPress={() => Alert.alert('skip press')}>
          <Text style={styles.text}>SKIP</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default GoBack;
