import mainDataReducer from "./mainDataReducer";
import uiReducer from "./uiReducer";
import defaultParamReducer from "./defaultParamReducer";
import iconReducer from "./iconReducer";
import selectReducer from "./selectReducer"

import {combineReducers} from "redux"

export const rootReducer = combineReducers({
    weatherData: mainDataReducer,
    ui: uiReducer,
    defaultParam:defaultParamReducer,
    icons: iconReducer,
    select: selectReducer
});