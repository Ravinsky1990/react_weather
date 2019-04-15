import {put} from "redux-saga/effects";
//actions
import {setWeatherData} from "../actions/actions";
import {setDefaultParams} from "../actions/actions"

import axios from "axios";
import {apiKeys} from "../../Apies"

export function* setWeatherData_Saga(action){
	
	//yield put()//onSpinner
	let response = yield axios.get(`http://api.apixu.com/v1/forecast.json?key=${apiKeys.Apixu}&q=${action.location}&days=7`)
	//off spinner
	let dataTooStore = response.data
	console.log(dataTooStore);

	//set Data
	yield put(setWeatherData(dataTooStore));
	

	//set defaultParam
	let defaultData = {
		cityName: response.data.location.name
	}
	yield put(setDefaultParams(defaultData))
};



