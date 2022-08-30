import React, {useEffect} from 'react';
import {Alert, StatusBar, useColorScheme} from 'react-native';
import {Camera} from 'react-native-vision-camera';

import Navigation from './Navigation/Index';
import useCachedResources from './appState/CachedResources';
import {AuthContext} from './Constants/Context';
import {Colors} from './Components/Theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const {State, Dispatchers} = useCachedResources();

  const checkCameraPermission = async () => {
    let status = await Camera.getCameraPermissionStatus();
    if (status !== 'authorized') {
      await Camera.requestCameraPermission();
      status = await Camera.getCameraPermissionStatus();
      if (status === 'denied') {
        Alert.alert(
          'You will not be able to scan if you do not allow camera access',
        );
      }
    }
  };

  useEffect(() => {
    checkCameraPermission();
  }, []);

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  // if (State.isLoadingComplete) {
  //   return (
  //     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //       <ActivityIndicator size="large" color="#35B2E6" />
  //       <Text>Loading.....</Text>
  //     </View>
  //   );
  // }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={Colors.lightgray}
        translucent={false}
      />
      <AuthContext.Provider
        value={{
          State,
          ...Dispatchers,
        }}>
        <Navigation />
      </AuthContext.Provider>
    </>
  );
};

export default App;
