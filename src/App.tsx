import React from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import Navigation from './Navigation/Index';
import useCachedResources from './appState/CachedResources';
import {AuthContext} from './Constants/Context';
import OrderItem from './Screens/App/OrderItem';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const {State, Dispatchers} = useCachedResources();

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
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AuthContext.Provider
        value={{
          State,
          ...Dispatchers,
        }}>
        <Navigation />
      </AuthContext.Provider> */}
      <OrderItem />
    </>
  );
};

export default App;
