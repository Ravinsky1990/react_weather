import {takeEvery} from "redux-saga/effects"
//sagas
import {setWeatherData_Saga} from "./weatherData"
//actions
import {START_FETCH_WEATHER_DATA} from "../actions/actions"

export function* watchSaga(){
	yield takeEvery(START_FETCH_WEATHER_DATA, setWeatherData_Saga);
}


