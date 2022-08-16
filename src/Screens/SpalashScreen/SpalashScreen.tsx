import React from 'react';
import {ImageBackground} from 'react-native';
import {Images} from '../../Components/Theme';

export default function SpalashScreen() {
  return (
    <>
      <ImageBackground source={Images.splashScreenImage} style={{flex: 1}} />
    </>
  );
}
