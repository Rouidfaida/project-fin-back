import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";

export const listreducer=combineReducers({
    alluser:userReducer,
    allproduct:productReducer
})