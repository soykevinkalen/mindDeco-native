import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const initialState = {
    userLogged: null
}

const removeValue = async () => {
    try {
        await AsyncStorage.removeItem('userLogged')
        await AsyncStorage.removeItem('token')
    } catch {
        Toast.show({
            text1: 'Oops!',
            text2: 'Error interno del servidor, intenta más tarde por favor',
            type: 'error'
        });
    }
}

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify({firstName: value.firstName, urlPic: value.urlPic})
        await AsyncStorage.setItem('userLogged', jsonValue)
        await AsyncStorage.setItem('token', value.token)
    } catch {
        Toast.show({
            text1: 'Oops!',
            text2: 'Error interno del servidor, intenta más tarde por favor',
            type: 'error'
        });
    }
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOG_USER':
            storeData(action.payload)
            return {
                ...state,
                userLogged: action.payload
            }
        case 'LOGOUT_USER':
            removeValue()
            return {
                userLogged: null
            }

        default:
            return state
    }
}

export default authReducer;