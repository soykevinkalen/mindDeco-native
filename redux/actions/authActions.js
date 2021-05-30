import axios from "axios";

const authActions = {
    newUser: (newUser) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.post('', newUser)

                if(response.data.validatorErrors) {   
                    return response.data.validatorErrors //joi validator
                } else if(!response.data.success) {
                    alert(response.data.error)
                } else {
                    dispatch({
                        type: 'ACCESS_USER',
                        payload: response.data.response
                    })
                    alert("You've been registered!")
                }
            } catch {
                alert("Internal database error, try in a moment")
            }
        }
    },

    logUser: (logUser) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.post('', logUser)          
                if(response.data.success) {
                    dispatch({
                        type: 'ACCESS_USER',
                        payload: response.data.response
                    })              
                } else {
                    //aca va a venir el error de pass o mail incorrect // o database error
                    alert(response.data.error)
                }
            } catch {
                alert("Internal database error, try in a moment")
            }
        }
    },

    logOut: () => {
        return (dispatch, getState) => {
            dispatch({
                type: 'LOGOUT_USER'
            })
        }
    },

    loginWithLS: (userLS) => {
        return async(dispatch, getState) => {
            try {
                const response = await axios.get('', {
                    headers: {
                        'Authorization': 'Bearer '+ userLS.token
                    }
                })
                dispatch({
                    type: 'ACCESS_USER',
                    payload: {
                        ...response.data.response,
                        token: userLS.token
                    }
                })
            } catch (error) {
                console.log(error)
                alert("Internal database error, try in a moment")
            }
        }
    }
}

export default authActions;