import axios from 'axios';

//en este action van los fetcheos, etc
const citiesActions = {

    getCities: () => {
        return (dispatch, getState) => {
            axios.get('https://webapp-mytinerary.herokuapp.com/api/cities')
            .then(res => dispatch({
                type: 'GET_CITIES',
                payload: res.data.response
            }))
            .catch((err) => ({
                success: false,
                err
            }))
        }
    },

    getCityOnReload: (id) => {
        return(dispatch, getState) => {
            axios.get(`https://webapp-mytinerary.herokuapp.com/api/city/${id}`)
            .then(res => dispatch({
                type: 'GET_CITY_ON_RELOAD',
                payload: res.data.response
            }))
            .catch((err) => ({
                success: false,
                err
            }))
        }
    },

    filterCities: (inputValue) => {
        return(dispatch, getState) => {
            dispatch({
                type: 'FILTER_CITIES',
                payload: inputValue
            })
        }
    }

}

export default citiesActions;