import axios from 'axios'

const productosActions = {
    obtenerLosProductos: () => {
        return async(dispatch, getState) => {
            try {
                // const respuesta = await axios.get('http://192.168.0.5:4000/api/productos')
                const respuesta = await axios.get('http://192.168.100.10:4000/api/productos')
                if(respuesta.data.success) {
                    dispatch({
                        type: 'OBTENER_PRODUCTOS',
                        payload: respuesta.data.respuesta
                    })
                } else {
                    alert('Algo salio mal y seras redigirido a la pagina inicial')
                }                
            } catch(error) {
                console.log('Productos actions ln17', error)
                // alert('Obtener productos Error interno del servidor, intente nuevamente en un momento')
            }
        }
    },

    obtenerProductosPorCategoria: (categoria) => {
        return async(dispatch, getState) => {
            try {
                // const respuesta = await axios.get(`http://192.168.0.5:4000/api/productos/${categoria}`)
                const respuesta = await axios.get(`http://192.168.100.10:4000/api/productos/${categoria}`)
                if(respuesta.data.success) {
                    dispatch({
                        type: 'PRODUCTOS_CATEGORIA',
                        payload: respuesta.data.respuesta
                    })
                } else {
                    alert('Algo salio mal y seras redigirido a la pagina inicial')
                }    
            } catch (error) {
                console.log('obtener producto por categoria', error)
                // alert('Obtener por categoria Error interno del servidor, intente nuevamente en un momento')
            }
        }
    },

    obtenerProductosPorSubcategoria: (subcategoria) => {
        return async (dispatch, getState) => {
            try {
                // const respuesta = await axios.get(`http://192.168.0.5:4000/api/productosSubcategoria/${subcategoria}`)
                const respuesta = await axios.get(`http://192.168.100.10:4000/api/productosSubcategoria/${subcategoria}`)
                if(respuesta.data.success) {
                    dispatch({
                        type: 'PRODUCTOS_SUBCATEGORIA',
                        payload: respuesta.data.respuesta
                    })
                } else {
                    alert('Algo salio mal y seras redigirido a la pagina inicial')
                }    
            } catch (error) {
                console.log(error)
                alert('Error interno del servidor, intente nuevamente en un momento')
            }
        }
    },

    cargarNuevoProducto: (nuevoProducto) => {
        return async (dispatch, getState) => {
            try {
                // const respuesta = await axios.post(`http://192.168.0.5:4000/api/productos`, nuevoProducto)
                const respuesta = await axios.post(`http://192.168.100.10:4000/api/productos`, nuevoProducto)
            }
            catch(error){
                console.log(error)
            }
        }
    }
}

export default productosActions