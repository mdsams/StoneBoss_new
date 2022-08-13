//The Component gives style to every popup messages of the app

import {ToastAndroid, Platform, Alert} from 'react-native';

export function notifyMessage(msg: string) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  } else {
    Alert.alert(msg);
  }
}
