import axios from 'axios';

const activitiesActions = {
    getItineraryActivities: (ItineraryId) => {
        return async (dispatch, getState) => {
           const response = await axios.get(`https://webapp-mytinerary.herokuapp.com/api/activities/${ItineraryId}`)           
           return response.data.response
        }
    }   
}

export default activitiesActions;
