import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import BlankSpacer from '../../Components/BlankSpace';
import Input from '../../Components/Input';
import {Colors, fonts, Images} from '../../Components/Theme';
import {userSignIn} from '../../Api/authService';
import {AuthContext, ctx} from '../../Constants/Context';

export default function SignIn() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true);

  const {signIn} = useContext<ctx>(AuthContext);

  const doSignIn = async () => {
    try {
      const userData = await userSignIn(email, password);
      if (userData) {
        signIn(userData.token, userData.user);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <ImageBackground source={Images.signInbackground} style={{flex: 1}}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <BlankSpacer height={hp(5)} />
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
          <Text
            style={{
              textAlign: 'center',
              fontFamily: fonts.PoppinsThin,
              fontSize: wp(17),
              color: Colors.white,
              lineHeight: wp(14.5),
            }}>
            Log In
          </Text>

          <BlankSpacer height={hp(1)} />
          <Text
            style={{
              textAlign: 'center',
              fontFamily: fonts.PoppinsRegular,
              fontSize: wp(5.5),
              color: Colors.white,
              lineHeight: wp(8),
            }}>
            Sign in to continue
          </Text>

          <BlankSpacer height={hp(6.5)} />
          <Input
            leftImage={Images.userIcon}
            placeholder="Enter email"
            value={email}
            onChangeInput={setEmail}
          />

          <BlankSpacer height={hp(2)} />

          <Input
            leftImage={Images.password}
            placeholder="Enter password"
            rightImage={hidePass ? Images.eyeClose : Images.eye}
            secureTextEntry={hidePass ? true : false}
            hidePass={hidePass}
            setHidePass={setHidePass}
            value={password}
            onChangeInput={setPassword}
          />

          <BlankSpacer height={hp(5)} />

          <TouchableOpacity
            style={{
              backgroundColor: Colors.buttonRed,
              height: hp(6),
              width: wp(80),
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}
            activeOpacity={0.8}
            onPress={() => doSignIn()}>
            <Text
              style={{
                fontSize: 18,
                lineHeight: wp(8),
                color: Colors.white,
              }}>
              Log In
            </Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </ImageBackground>
    </>
  );
}
