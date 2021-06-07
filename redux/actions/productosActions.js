import axios from 'axios'
import Toast from 'react-native-toast-message';

const productosActions = {
    obtenerLosProductos: () => {
        return async(dispatch, getState) => {
            try {
                const respuesta = await axios.get('https://minddeco.herokuapp.com/api/productos')
                // const respuesta = await axios.get('http://192.168.0.89:4000/api/productos')
                if(respuesta.data.success) {
                    dispatch({
                        type: 'OBTENER_PRODUCTOS',
                        payload: respuesta.data.respuesta
                    })
                } else {
                    Toast.show({
                        text1: 'Oops!',
                        text2: 'Error interno del servidor, intenta más tarde por favor',
                        type: 'error'
                    });
                }                
            } catch(error) {
                // console.log('Productos actions ln17', error)
                Toast.show({
                    text1: 'Oops!',
                    text2: 'Error interno del servidor, intenta más tarde por favor',
                    type: 'error'
                });
            }
        }
    },

    obtenerProductosPorCategoria: (categoria) => {
        return async(dispatch, getState) => {
            try {
                const respuesta = await axios.get(`https://minddeco.herokuapp.com/api/productos/${categoria}`)
                // const respuesta = await axios.get(`http://192.168.0.89:4000/api/productos/${categoria}`)
                if(respuesta.data.success) {
                    dispatch({
                        type: 'PRODUCTOS_CATEGORIA',
                        payload: respuesta.data.respuesta
                    })
                } else {
                    Toast.show({
                        text1: 'Oops!',
                        text2: 'Error interno del servidor, intenta más tarde por favor',
                        type: 'error'
                    });
                }    
            } catch (error) {
                // console.log('obtener producto por categoria', error)
                Toast.show({
                    text1: 'Oops!',
                    text2: 'Error interno del servidor, intenta más tarde por favor',
                    type: 'error'
                });
            }
        }
    },

    obtenerProductosPorSubcategoria: (subcategoria) => {
        return async (dispatch, getState) => {
            try {
                const respuesta = await axios.get(`https://minddeco.herokuapp.com/api/productosSubcategoria/${subcategoria}`)
                // const respuesta = await axios.get(`http://192.168.0.89:4000/api/productosSubcategoria/${subcategoria}`)
                if(respuesta.data.success) {
                    dispatch({
                        type: 'PRODUCTOS_SUBCATEGORIA',
                        payload: respuesta.data.respuesta
                    })
                } else {
                    Toast.show({
                        text1: 'Oops!',
                        text2: 'Error interno del servidor, intenta más tarde por favor',
                        type: 'error'
                    });
                }    
            } catch (error) {
                // console.log(error)
                Toast.show({
                    text1: 'Oops!',
                    text2: 'Error interno del servidor, intenta más tarde por favor',
                    type: 'error'
                });
            }
        }
    },

    cargarNuevoProducto: (nuevoProducto) => {
        return async (dispatch, getState) => {
            try {
                const respuesta = await axios.post(`https://minddeco.herokuapp.com/api/productos`, nuevoProducto)
                // const respuesta = await axios.post(`http://192.168.0.89:4000/api/productos`, nuevoProducto)
                Toast.show({
                    text1: 'Genial!',
                    text2: 'Producto cargado correctamente',
                    type: 'success'
                });
            }
            catch(error){
                // console.log(error)
                Toast.show({
                    text1: 'Oops!',
                    text2: 'Error interno del servidor, intenta más tarde por favor',
                    type: 'error'
                });
            }
        }
    }
}

export default productosActions