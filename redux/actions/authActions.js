import axios from "axios";

import Toast from 'react-native-toast-message';
 
const authActions = {
    createUser: (user) => {
        return async (dispatch, getState) => {
            try{
                const response = await axios.post('https://minddeco.herokuapp.com/api/usuario/registrarse', user)
                // const response = await axios.post('http://192.168.0.89:4000/api/usuario/registrarse', user)
                if(!response.data.success){
                    return response.data.errores
                }

                dispatch({
                    type: 'LOG_USER',
                    payload: response.data.success ? response.data.respuesta : null
                })
                Toast.show({
                    text1: 'Bienvenido!',
                    text2: 'Ya formas parte de nuestra comunidad',
                    type: 'success'
                });
            }catch(error){
                // console.log('authActions ln 16', error)
                Toast.show({
                    text1: 'Oops!',
                    text2: 'Error interno del servidor, intenta más tarde por favor',
                    type: 'error'
                });
            }
        }
    },
    logInUser: (user) => {
        return async(dispatch, getState) => {
            try{
                const response = await axios.post('https://minddeco.herokuapp.com/api/usuario/loguearse', user)
                // const response = await axios.post('http://192.168.0.89:4000/api/usuario/loguearse', user)
                if(!response.data.success){
                    // console.log('authActions.js ln 27',response)
                    return response.data.error
                }
                // console.log('ln 29 authActions')
                dispatch({
                    type:'LOG_USER',
                    payload: response.data.success ? response.data.respuesta : null
                })
                Toast.show({
                    text1: 'Bienvenido de nuevo!',
                    text2: 'Es bueno saber de ti nuevamente',
                    type: 'success'
                });
            }catch(error){
                // console.log(error)
                Toast.show({
                    text1: 'Oops!',
                    text2: 'Error interno del servidor, intenta más tarde por favor',
                    type: 'error'
                });
            }
        }
    },
    logOutUser: () => {
        return(dispatch, getState) => {
            try{
                dispatch({type: 'LOGOUT_USER'})
                Toast.show({
                    text1: 'Hasta luego!',
                    text2: 'Esperamos que vuelvas pronto',
                    type: 'success'
                });
            }catch(error){
                // console.log(error)
                Toast.show({
                    text1: 'Oops!',
                    text2: 'Error interno del servidor, intenta más tarde por favor',
                    type: 'error'
                });
            }
        }
    },
    logInForced: (user) => {
        
        return async (dispatch, getState) => {
            try {
                const respuesta = await axios.get('https://minddeco.herokuapp.com/api/usuario/loginforzado', {
                // const respuesta = await axios.get('http://192.168.0.89:4000/api/usuario/loginforzado', {
                    headers: {
                        'Authorization': 'Bearer '+user.token
                    }
                })
                
                dispatch({type: 'LOG_USER', payload: {
                    ...respuesta.data.respuesta,
                    token: user.token
                }})
                
                Toast.show({
                    text1: 'Bienvenido de nuevo!',
                    text2: 'Es bueno saber de ti nuevamente',
                    type: 'success'
                });
            } catch(error) {
                // console.log(error)
                Toast.show({
                    text1: 'Oops!',
                    text2: 'Error interno del servidor, intenta más tarde por favor',
                    type: 'error'
                });
            }
            
        }
    },
    botonGoogle: (user) => {
        return async (dispatch, getState) => {
            try{
                const response = await axios.post("https://minddeco.herokuapp.com/api/usuario/botonGoogle", user)
                // const response = await axios.post("http://192.168.0.89:4000/api/usuario/botonGoogle", user)
                // console.log('authActions.js',response)
                dispatch({
                    type: 'LOG_USER',
                    payload: response.data.respuesta 
                })
                Toast.show({
                    text1: 'Bienvenido!',
                    text2: 'Disfruta de tus compras',
                    type: 'success'
                });
            }catch(error){
                // console.log('authActions.js',error)
                Toast.show({
                    text1: 'Oops!',
                    text2: 'Error interno del servidor, intenta más tarde por favor',
                    type: 'error'
                });
            }
        }
    }
}

export default authActions