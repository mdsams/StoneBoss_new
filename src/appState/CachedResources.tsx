import {useEffect, useMemo, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface GlobalStateType {
  isLoadingComplete: boolean;
  userToken: null | string;
  userProfile: userProfile | null;
}

export interface userProfile {
  email: string;
  image: string;
  _id: string;
  password: string;
  mobileNo: string;
  firstName: string;
  lastName: string;
  conditionAccepted: boolean;
}

/**
 * useCachedResources is a hook which is handling SIGNIN SIGNUP and storing the token of a User
 */
export default function useCachedResources() {
  const initialState: GlobalStateType = {
    userToken: null,
    isLoadingComplete: true,
    userProfile: null,
  };

  const Reducer = (prevState: any, action: any) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          userProfile: action.userProfile,
          isLoadingComplete: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userToken: action.token,
          userProfile: action.userProfile,
          isLoadingComplete: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userToken: null,
          userProfile: null,
          isLoadingComplete: false,
        };
      default:
        throw new Error();
    }
  };
  const [State, dispatch] = useReducer(Reducer, initialState);

  //This method is using cached value and not allowing the function to build from scratch on every render
  const Dispatchers = useMemo(
    () => ({
      signIn: async (userToken: string, userProfile: userProfile) => {
        try {
          await AsyncStorage.setItem('token', userToken);
          await AsyncStorage.setItem(
            'userProfile',
            JSON.stringify(userProfile),
          );
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGIN', token: userToken, userProfile: userProfile});
      },

      signOut: async () => {
        try {
          await AsyncStorage.removeItem('token');
          await AsyncStorage.removeItem('userProfile');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
    }),
    [],
  );

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    setTimeout(async () => {
      async function loadResourcesAndDataAsync() {
        try {
          //   SplashScreen.preventAutoHideAsync();

          try {
            let token: null | string = null;
            token = await AsyncStorage.getItem('token');
            const getData = await AsyncStorage.getItem('userProfile');
            if (getData !== null) {
              var parsedData = JSON.parse(getData);
            }

            dispatch({
              type: 'RETRIEVE_TOKEN',
              token: token,
              userProfile: parsedData,
            });
          } catch (e) {
            console.log(e);
          }
        } catch (e) {
          // We might want to provide this error information to an error reporting service
          console.warn(e);
        } finally {
          //   SplashScreen.hideAsync();
        }
      }
      loadResourcesAndDataAsync();
    }, 3000);
  }, []);

  return {
    State,
    Dispatchers,
  };
}
