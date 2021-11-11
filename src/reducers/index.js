import { combineReducers } from "redux";
import productsReducer from "./products";
import editProductReducer from "./editProduct";

const appReducers = combineReducers({
    productsReducer,
    editProductReducer
})

export default appReducers