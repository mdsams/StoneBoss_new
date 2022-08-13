//This Component is created to avoid require cycle error

import {createContext} from 'react';
import {GlobalStateType, userProfile} from '../appState/CachedResources';

export interface ctx {
  signIn: (userToken: string, userProfile: userProfile) => Promise<void>;
  signOut: () => Promise<void>;
  State: GlobalStateType;
}

export const AuthContext = createContext<ctx | any>(null);
