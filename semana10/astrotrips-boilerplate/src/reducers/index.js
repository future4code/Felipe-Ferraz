import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import tripsList from './tripes'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    tripsList
    // Outros reducers aqui
  });
