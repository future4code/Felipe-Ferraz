import axios from 'axios'
import { routes } from '../containers/Router'
import { push } from 'connected-react-router'

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

export const registerNewUser = (id, data) => async (dispatch) => {
    try {
        const response = await axios.post(`${baseUrl}/felipe/trips/${id}/apply`, data)
        alert("Cadastro realizado com sucesso!")
        dispatch(push(routes.homeScreen))
    }
    catch (error) {
        console.error('o erro é ' + error)
    }
}

export const createNewTrip = (data) => async (dispatch) => {
    try {
        const response = await axios.post(`${baseUrl}/felipe/trips`, data,
            {
                headers:
                {
                    auth: localStorage.getItem('token')
                }
            })
        alert('viagem criada com sucesso')
        dispatch(push(routes.admPage))
    }
    catch (error) {
        console.error('o erro é' + error)
    }
}