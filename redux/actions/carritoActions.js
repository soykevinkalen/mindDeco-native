import axios from 'axios'
import Toast from 'react-native-toast-message';

const carritoActions = {
    agregarProductoAlCarrito: (user, producto) => {
        return async (dispatch, getState) => {
            try{
                // const response = await axios.put('http://192.168.0.5:4000/api/carrito',{producto},{
                const response = await axios.put('http://192.168.100.10:4000/api/carrito',{producto},{
                    headers: {
                        'Authorization': 'Bearer '+user.token
                    }
                })
                dispatch({
                    type: 'LOG_USER',
                    payload: {...response.data.respuesta, token: user.token}
                })
                return response.data
            }catch(error){
                console.log(error)
                Toast.show({
                    text1: 'Oops!',
                    text2: 'Error interno del servidor, intenta más tarde por favor',
                    type: 'error'
                });
            }
        }        
    },
    modificarProducto: (user, producto, cantidad) => {
        return async (dispatch, getState) => {
            try{
                // const response = await axios.put('http://192.168.0.5:4000/api/modificarCantidadProducto',{producto, cantidad},{
                const response = await axios.put('http://192.168.100.10:4000/api/modificarCantidadProducto',{producto, cantidad},{
                    headers: {
                        'Authorization': 'Bearer '+user.token
                    }
                })
                dispatch({
                    type: 'LOG_USER',
                    payload: response.data.success ? {...response.data.respuesta, token: user.token} : null
                })
                return response.data.respuesta                
            }catch(error){
                console.log(error)
                Toast.show({
                    text1: 'Oops!',
                    text2: 'Error interno del servidor, intenta más tarde por favor',
                    type: 'error'
                });
            }
        }    
    },
    obtenerProductos: (user) => {
        return async (dispatch, getState) => {
            try{
                // const response = await axios.get('http://192.168.0.5:4000/api/obtenerProductos',{
                const response = await axios.get('http://192.168.100.10:4000/api/obtenerProductos',{
                    headers: {
                        'Authorization': 'Bearer '+user.token
                    }
                })
                return response.data.respuesta
            }catch(error){
                console.log(error)
                Toast.show({
                    text1: 'Oops!',
                    text2: 'Error interno del servidor, intenta más tarde por favor',
                    type: 'error'
                });
            }
        }        
    },
    borrarProducto:(user, producto) => {
        return async (dispatch, getState) => {
            try{
                console.log('user',user)
                // const response = await axios.put('http://192.168.0.5:4000/api/borrarProducto',{producto},{
                const response = await axios.put('http://192.168.100.10:4000/api/borrarProducto',{producto},{
                    headers: {
                        'Authorization': 'Bearer '+user.token
                    }
                })
                
                dispatch({
                    type: 'LOG_USER',
                    payload: response.data.success ? {...response.data.respuesta, token: user.token} : null
                })
                Toast.show({
                    text1: 'Hey!',
                    text2: 'Eliminaste el producto del carrito',
                    type: 'info'
                });
                return response.data.respuesta
            }catch(error){
                console.log(error)
                Toast.show({
                    text1: 'Oops!',
                    text2: 'Error interno del servidor, intenta más tarde por favor',
                    type: 'error'
                });
            }
        }       
    }
}

export default carritoActions