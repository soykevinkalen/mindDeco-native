import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    userLogged: null
}

const removeValue = async () => {
    try {
        await AsyncStorage.removeItem('userLogged')
        await AsyncStorage.removeItem('token')
    } catch {
        alert('Internal database error, try in a moment')
    }
}

const storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify({firstName: value.firstName, urlPic: value.urlPic})
        await AsyncStorage.setItem('userLogged', jsonValue)
        await AsyncStorage.setItem('token', value.token)
    } catch {
        alert('Internal database error, try in a moment')
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