import axios from 'axios'
import {routes} from '../containers/Router'
import { push } from "connected-react-router";

const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/felipe'

export const login = (email, password) => async (dispatch) => {
    const loginData = {
        email,
        password
    }
    try {
        const response = await axios.post(`${baseUrl}/login`, loginData)

        const token = response.data.token

        localStorage.setItem('token', token)

        dispatch(push(routes.admPage))
        
    }catch(error){
        console.error("O erro é " + error)
    }
}