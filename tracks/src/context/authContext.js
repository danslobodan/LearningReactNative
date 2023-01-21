import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRef';
 
const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { token: action.payload, errorMessage: '' };
        case 'clear_error_message':
            return { ...state, errorMessage: '' }
        default:
            return state;
    }
}

const tryLocalSignIn = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('TrackList');
        return;
    }

    navigate('loginFlow');
}

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clear_error_message' });
}

const signUp = (dispatch) => async ({ email, password }) => {

    try {
        const response = await trackerApi.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('TrackList');
    } catch (error) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with signup '});
    }
}

const signIn = (dispatch) => async ({ email, password }) => {

    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });
        navigate('TrackList');
    } catch (error) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' })
    }
}

const signOut = (dispatch) => async () => {

}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signUp, signIn, signOut, clearErrorMessage, tryLocalSignIn },
    { 
        token: null,
        errorMessage: '' 
    }
)