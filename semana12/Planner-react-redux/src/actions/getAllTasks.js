import axios from 'axios'
import { baseUrl, auth } from './createTask'
export const getTasks = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}/${auth}`)
    dispatch(getTasksToReducer(response.data))
  } catch (error) {
    console.error(error.message)
  }
}

export const getTasksToReducer = (data) => ({
  type: 'GET_TASKS',
  payload: { data },
})
