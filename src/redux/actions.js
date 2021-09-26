import {ADD_PRODUCT, FETCH, POST_THE_POST} from "./constants";
import axios from "../axios/axios";


export function fetchStart() {
      return dispatch => {
       dispatch({type: FETCH.START})
      }
}
export const fetchSuccess = () => {
  return async dispatch => {
   const response = await axios.get('/api/messages ')
       .then(response => response.data)

      dispatch({ type: FETCH.SUCCESS, payload: response})
  }
 }

export function fetchFailure(e) {

    return dispatch => {
        console.log("Something vent wrong ",e)
        dispatch({type: FETCH.FAILURE, payload: e})
    }
}
export function postOrder(e) {


    return async dispatch => {
        const response = await axios.post('/api/message ', {username:'serhii',
            message:e}

        )

        dispatch({type: POST_THE_POST, payload: response.data.message})
    }
}
export  function addProduct(current) {

    return  dispatch => {
       dispatch({ type: ADD_PRODUCT,
           payload: current})
    }
}
