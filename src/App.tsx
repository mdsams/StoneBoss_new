import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import Navigation from './Navigation/Index';
import useCachedResources from './appState/CachedResources';
import {AuthContext} from './Constants/Context';
import {Colors} from './Components/Theme';

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
