import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef';
 
const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            return { token: action.payload, errorMessage: '' };
        default:
            return state;
    }
}

const signUp = (dispatch) => async ({ email, password }) => {

    try {
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signup', payload: response.data.token });
        navigate('TrackList');
    } catch (error) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with signup '});
    }
}

const signIn = (dispatch) => {
    return async ({ email, password }) => {


    }
}

const signOut = (dispatch) => {
    return () => {


    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signUp, signIn, signOut },
    { 
        token: null,
        errorMessage: '' 
    }
)