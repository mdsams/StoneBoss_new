import React from 'react';
import {View} from 'react-native';

const BlankSpacer = ({style, height, width, color: backgroundColor}: any) => {
  return <View style={[{height, width, backgroundColor}, style]} />;
};

export default BlankSpacer;
