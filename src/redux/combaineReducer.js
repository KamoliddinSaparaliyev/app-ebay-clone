import { combineReducers } from "redux";
import authReducer from "./auth";
import basketReducer from "./basket";
import wishlistReducer from './wishlist'

const rootReducer = combineReducers({
    login: authReducer,
    like: wishlistReducer,
    basket: basketReducer
})
export default rootReducer 