import axios from "axios";
 
const authActions = {
    createUser: (user) => {
        return async (dispatch, getState) => {
            try{
                const response = await axios.post('http://192.168.0.5:4000/api/usuario/registrarse', user)
                if(!response.data.success){
                    return response.data.errores
                }
                console.log('authActions ln:11',response)
                dispatch({
                    type: 'LOG_USER',
                    payload: response.data.success ? response.data.respuesta : null
                })
            }catch(error){
                console.log('authActions ln 16',error)

            }
        }
    },
    logInUser: (user) => {
        return async(dispatch, getState) => {
            try{
                const response = await axios.post('http://192.168.0.5:4000/api/usuario/loguearse', user)
                if(!response.data.success){
                    return response.data.error
                }
                console.log(response.data.respuesta)
                dispatch({
                    type:'LOG_USER',
                    payload: response.data.success ? response.data.respuesta : null
                })
            }catch(error){
                console.log(error)
            }
        }
    },
    logOutUser: () => {
        return(dispatch, getState) => {
            try{
                dispatch({type: 'LOGOUT_USER'})
            }catch(error){
                console.log(error)
            }
        }
    },
    logInForced: (user) => {
        
        return async (dispatch, getState) => {
            try {
                const respuesta = await axios.get('http://192.168.0.5:4000/api/usuario/loginforzado', {
                    headers: {
                        'Authorization': 'Bearer '+user.token
                    }
                })
                
                dispatch({type: 'LOG_USER', payload: {
                    ...respuesta.data.respuesta,
                    token: user.token
                }})
            } catch(error) {
                console.log(error)
                // toast.error('Ops... An error occurred, contact the administrator')  
            }
            
        }
    }
    

        
}

export default authActions