import { RETRIEVE_TOKEN, LOGIN, LOGOUT } from "../action/type";
import { userProfile } from "../action/actions";

export interface GlobalStateType {
    isLoadingComplete: boolean;
    userToken: null | string;
    userProfile: userProfile | null;
}

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