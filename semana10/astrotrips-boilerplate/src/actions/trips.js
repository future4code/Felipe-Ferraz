import axios from 'axios'

const setTrips = (data) => ({
    type:'SET_TRIPS',
    payload:{
        data
    }
})

export const getTrips = () => async(dispatch) =>{
    const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/felipe/trips')
    console.log(response.data.trips)
    dispatch(setTrips(response.data.trips))
}