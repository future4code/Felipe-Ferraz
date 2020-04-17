import axios from 'axios'
import { getTasks } from './getAllTasks'

export const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/generic'
export const auth = 'planner-felipee'
export const createTask = (day, text) => async (dispatch) => {
  const dayAndText = { day: day, text: text }
  try {
    await axios.post(`${baseUrl}/${auth}`, dayAndText)
    dispatch(getTasks())
  } catch (error) {
    console.error(error.message)
  }
}
