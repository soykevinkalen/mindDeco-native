const initialState = {
    itineraryActivities: [],
    loading: true
}

const activityReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case 'GET_ITINERARY_ACTIVITIES':
            return {
                ...state,
                itineraryActivities: action.payload,
                loading: false
            }
        
        case 'UPDATE_LOADING_STATE':
            return {
                ...state,
                loading: true
            }

        default:
            return state
    }
}

export default activityReducer;