import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./Reducers/authReducer"; // Ensure this path is correct

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
