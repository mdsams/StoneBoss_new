import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {AuthContext, ctx} from '../Constants/Context';

//Screens
import SignIn from '../Screens/AuthScreen/SignIn';
import SignUp from '../Screens/AuthScreen/SignUp';
import Home from '../Screens/App/Home';
import SpalashScreen from '../Screens/SpalashScreen/SpalashScreen';
import ProductAndBarCode from '../Screens/App/ProductAndBarCode';
import ProductListing from '../Screens/App/ProductDetails';
import Order from '../Screens/App/Order';
import OrderItem from '../Screens/App/OrderItem/OrderItem';

const Stack = createStackNavigator();

/**
 * Screens For Authentications
 */
const AuthStack = () => (
  <Stack.Navigator
    initialRouteName="SignIn"
    screenOptions={{header: () => null}}>
    {/* <Stack.Screen name="Intro" component={Intro} options={{header: () => null}}/> */}
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{header: () => null}}
    />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);

// const AppPage = createStackNavigator();

const AppPage = () => (
  <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="ProductAndBarCode" component={ProductAndBarCode} />
    <Stack.Screen name="ProductListing" component={ProductListing} />
    <Stack.Screen name="Order" component={Order} />
    <Stack.Screen name="OrderItem" component={OrderItem} />
  </Stack.Navigator>
);
export default function Navigation() {
  const {State} = useContext<ctx>(AuthContext);
  console.log(State);
  return (
    <NavigationContainer>
      {State.isLoadingComplete === true ? (
        <SpalashScreen />
      ) : State.userToken === null ? (
        <AuthStack />
      ) : (
        <AppPage />
      )}
    </NavigationContainer>
  );
}
