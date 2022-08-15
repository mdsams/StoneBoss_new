import AsyncStorage from '@react-native-async-storage/async-storage';
import { LOGOUT, RETRIEVE_TOKEN, LOGIN } from './type';

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

export const actions = {
  signIn: (userToken: string, userProfile: userProfile) => ({
    type: LOGIN,
    token: userToken,
    userProfile: userProfile
  }),

  signOut: () => ({
    type: LOGOUT
  }),

  retrieveToken: (userToken: string, userProfile: userProfile) => ({
    type: RETRIEVE_TOKEN,
    token: userToken,
    userProfile: userProfile,
  })

}
