import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Pressable,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

//Components
import {Colors, fonts, Images} from '../../Components/Theme';
import Input from '../../Components/Input';
import BlankSpacer from '../../Components/BlankSpace';

//Functions
import {userSignUp} from '../../Api/authService';

const SignUp = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [hidePass, setHidePass] = useState(true);
  const [hidePassRe, setHidePassRe] = useState(true);

  const validate = () => {
    if (
      !firstName ||
      !lastName ||
      !mobileNo ||
      !email ||
      !password ||
      !confirmPassword ||
      !acceptTerms
    ) {
      Alert.alert('All fields are required.');
      return false;
    }

    if (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(email)) {
        Alert.alert('Invalid email');
        return false;
      }
    }

    if (password) {
      var reg = new RegExp(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/g,
      );
      if (!reg.test(password)) {
        Alert.alert(
          'Password contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
        );
        return false;
      }
    }

    if (password !== confirmPassword) {
      Alert.alert('Password missmatch');
      return false;
    }
  };

  const resetData = () => {
    setFirstName('');
    setLastName('');
    setMobileNo('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setAcceptTerms(false);
  };

  const doSignUp = async () => {
    validate() === false
      ? null
      : userSignUp({
          firstName,
          lastName,
          mobileNo,
          email,
          password: confirmPassword,
          conditionAccepted: acceptTerms,
        })
          .then(resetData() as any)
          .then(navigation.navigate('SignIn') as any);
  };

  return (
    <>
      <KeyboardAwareScrollView
        style={{flex: 1, backgroundColor: Colors.black}}
        showsVerticalScrollIndicator={false}>
        <BlankSpacer height={hp(2.5)} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            width: wp(90),
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: wp(5.8),
              fontFamily: fonts.PoppinsSemiBold,
              color: Colors.textColor,
              margin: wp(4),
            }}>
            Create Your Account
          </Text>
        </View>

        <BlankSpacer height={hp(2)} />
        <View
          style={{
            flexDirection: 'row',
            width: wp(90),
            justifyContent: 'space-between',
            alignSelf: 'center',
          }}>
          <Input
            width={wp(44)}
            placeholder="First Name"
            value={firstName}
            onChangeInput={setFirstName}
          />

          <Input
            width={wp(44)}
            placeholder="Last name"
            value={lastName}
            onChangeInput={setLastName}
          />
        </View>

        <BlankSpacer height={hp(2)} />
        <Input
          placeholder="Phone number"
          keyboardType="decimal-pad"
          value={mobileNo}
          maxlength={10}
          onChangeInput={setMobileNo}
        />

        <BlankSpacer height={hp(2)} />

        <Input placeholder="Email" value={email} onChangeInput={setEmail} />

        <BlankSpacer height={hp(2)} />
        <Input
          placeholder="Password"
          leftImage={Images.password}
          rightImage={hidePass ? Images.eyeClose : Images.eye}
          secureTextEntry={hidePass ? true : false}
          hidePass={hidePass}
          setHidePass={setHidePass}
          value={password}
          onChangeInput={setPassword}
        />
        <BlankSpacer height={hp(1)} />
        <View
          style={{
            flexDirection: 'row',
            width: wp(90),
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: wp(3.1),
              fontFamily: fonts.PoppinsRegular,
              color: '#999999',
              paddingHorizontal: wp(2),
            }}>
            Password length should be minimum 8 and contain at least one
            uppercase letter, one lowercase letter and one number.
          </Text>
        </View>

        <BlankSpacer height={hp(3)} />
        <Input
          placeholder="Confirm password"
          leftImage={Images.password}
          rightImage={hidePassRe ? Images.eyeClose : Images.eye}
          secureTextEntry={hidePassRe ? true : false}
          hidePass={hidePassRe}
          setHidePass={setHidePassRe}
          value={confirmPassword}
          onChangeInput={setConfirmPassword}
        />

        <BlankSpacer height={hp(4)} />
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            borderColor: Colors.saloginbtnback,
          }}>
          <Pressable
            style={[styles.checkboxBase, acceptTerms && styles.checkboxChecked]}
            onPress={() => {
              setAcceptTerms(!acceptTerms);
            }}>
            {acceptTerms && (
              <Icon
                name="checkbox-outline"
                color="white"
                size={24}
                adjustsFontSizeToFit
              />
            )}
          </Pressable>
          <Text style={{fontSize: wp(5), marginLeft: wp(2)}}>
            Accept the term and conditions
          </Text>
        </View>

        <BlankSpacer height={hp(2.4)} />

        <TouchableOpacity
          style={{
            backgroundColor: Colors.lightBlue,
            borderRadius: 8,
            height: hp(6),
            width: wp(40),
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
          activeOpacity={0.8}
          onPress={() => doSignUp()}>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 18 * 1.4,
              color: Colors.white,
            }}>
            Continue
          </Text>
        </TouchableOpacity>

        <BlankSpacer height={hp(6)} />
        <Text
          style={{
            fontFamily: fonts.PoppinsMedium,
            fontSize: wp(4),
            color: '#00000080',
            textAlign: 'center',
          }}>
          Already have an account? {''}
          <Text
            style={{color: Colors.textColor}}
            onPress={() => navigation.navigate('SignIn')}>
            LOGIN
          </Text>
        </Text>
        <BlankSpacer height={hp(3)} />
      </KeyboardAwareScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'red',
    borderColor: 'coral',
  },

  checkboxChecked: {
    backgroundColor: 'green',
  },
});

export default SignUp;
