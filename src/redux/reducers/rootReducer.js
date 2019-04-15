import mainDataReducer from "./mainDataReducer";
import uiReducer from "./uiReducer";
import defaultParamReducer from "./defaultParamReducer"

import {combineReducers} from "redux"

export const rootReducer = combineReducers({
    weatherData: mainDataReducer,
    ui: uiReducer,
    defaultParam:defaultParamReducer
});