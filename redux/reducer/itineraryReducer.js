const initialState = {
    cityItineraries: [],
    loading: true
}

const itineraryReducer = (state = initialState, action) => {
    switch(action.type) {

        case 'GET_CITY_ITINERARIES':
            return {
                cityItineraries: action.payload,
                loading: false
            }

        case 'REMOVE_ITINERARIES':
            return {
                ...state,
                cityItineraries: [],
                loading: true
            }

        default:
            return state
    }
}

export default itineraryReducer;