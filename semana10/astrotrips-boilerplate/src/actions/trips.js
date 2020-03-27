import axios from 'axios'

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureX'

const setTrips = (data) => ({
    type: 'SET_TRIPS',
    payload: {
        data
    }
})

const setTripDatail = (data) => ({
    type: 'SET_TRIP_DETAIL',
    payload: {
        data
    }
})

export const getTrips = () => async (dispatch) => {
    const response = await axios.get(`${baseUrl}/felipe/trips`)
    dispatch(setTrips(response.data.trips))
}

export const getTripsDetail = (id) => async (dispatch) => {
    const response = await axios.get(`${baseUrl}/felipe/trip/${id}`, {
        headers:
        {
            auth: localStorage.getItem('token')
        }
    })
    dispatch(setTripDatail(response.data.trip))
}
