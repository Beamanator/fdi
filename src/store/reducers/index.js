import { combineReducers } from "redux";

import gapiReducer from "./_gapi";
import sheetDataReducer from "./_sheetData";

const rootReducer = combineReducers({
    gapi: gapiReducer,
    sheetData: sheetDataReducer,
});

export default rootReducer;
