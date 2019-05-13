import {put} from "redux-saga/effects";
//actions
import {setWeatherData} from "../actions/actions";
import {setDefaultParams} from "../actions/actions";
import {setIconData} from "../actions/actions";

import axios from "axios";
import {apiKeys} from "../../Apies"

export function* setWeatherData_Saga(action){
	
	//yield put()//onSpinner
	let responseIcons = yield axios.get("https://www.apixu.com/doc/conditions.json");

	try{
		let response = yield axios.get(`https://api.apixu.com/v1/forecast.json?key=${apiKeys.Apixu}&q=${action.location}&days=7`);
		//off spinner
		let dataTooStore = response.data

		//set Data
		yield put(setWeatherData(dataTooStore));
		yield put(setIconData(responseIcons.data))

		//set defaultParam
		let defaultData = {
			cityName: response.data.location.name
		}
		yield put(setDefaultParams(defaultData))
	}catch(e){
		console.log(e);
		
	}
};



