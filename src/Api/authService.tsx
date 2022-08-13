import {Auth_Service} from './Url';
import {notifyMessage} from '../Constants/NotifyMessage';

export interface userData {
  email: string;
  password: string;
  mobileNo: string;
  firstName: string;
  lastName: string;
  conditionAccepted: boolean;
}

//API calling for User SignUp
export const userSignUp = async (userData: userData) => {
  try {
    const response = await fetch(`${Auth_Service}/user-sign-up`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
        mobileNo: userData.mobileNo,
        firstName: userData.firstName,
        lastName: userData.lastName,
        conditionAccepted: userData.conditionAccepted,
      }),
    });
    const jsonResponse = await response.json();
    notifyMessage(JSON.stringify(jsonResponse.message));
    console.log(jsonResponse.message);
  } catch (err) {
    if (err instanceof Error) {
      notifyMessage(err.message);
    }
  }
};

//API calling for User SignIn
export const userSignIn = async (email: string, password: string) => {
  console.log(email, password);
  try {
    const response = await fetch(`${Auth_Service}/user-sign-in`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const jsonResponse = await response.json();
    notifyMessage(JSON.stringify(jsonResponse.message));
    if (response.status === 200) {
      return jsonResponse;
    }
  } catch (err) {
    if (err instanceof Error) {
      notifyMessage(err.message);
    }
  }
};
