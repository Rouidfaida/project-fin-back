import { combineReducers } from "redux";
import { categorieReducer } from "./categorieReducer";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";

export const listreducer=combineReducers({
    alluser:userReducer,
    allproduct:productReducer,
    allcategorie:categorieReducer
})