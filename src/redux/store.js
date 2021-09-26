import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import orderReducer from "./orederReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
 orderReducer: orderReducer
})

 export const store = createStore(rootReducer, compose( applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))