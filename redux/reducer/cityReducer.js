const initialState = {
    city: '',
    cities: [],
    citiesUpdated: [],
    noCitiesAlert: false,
    loading: true
}

const cityReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_CITIES':
            return {
                ...state,
                cities: action.payload,
                citiesUpdated: action.payload,
                loading: false
            }
        
        case 'FILTER_CITIES':
            let valueInput = action.payload.trim().toUpperCase()
            let citiesFiltered = state.cities.filter(city => (city.city).toUpperCase().indexOf(valueInput) === 0 && (city.city).toUpperCase().startsWith(valueInput));

            if(valueInput.length > 0) {
                return {
                    ...state,
                    citiesUpdated: citiesFiltered,
                    noCitiesAlert: citiesFiltered.length > 0 ? false : true
                }
            } else {
                return {
                    ...state,
                    citiesUpdated: state.cities
                }
            }

        default:
            return state

    }
}


export default cityReducer;