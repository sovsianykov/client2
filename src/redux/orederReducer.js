import {ADD_PRODUCT, FETCH, POST_THE_POST} from "./constants";

const initialState = {
    ordersList : [],
    isLoading : false,
    error : null,
    localOrderList: [],
    currentPost : '',
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH.START :
            return {
                ...state,
                isLoading: true,
            }
        case FETCH.SUCCESS :
            return {
                ...state,
                isLoading: false,
                ordersList: action.payload
            }
        case FETCH.FAILURE :
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case POST_THE_POST :
            return {
                ...state,
               currentPost: action.payload
            }
        case ADD_PRODUCT :
            return {
                ...state,
                localOrderList: state.localOrderList.concat(action.payload).filter(el=>el.value !== "")
            }
        default :
            return state;
    }
}
export default orderReducer;
