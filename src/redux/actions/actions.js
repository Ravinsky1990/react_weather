//Start fetch weather data
export const START_FETCH_WEATHER_DATA = "START_FETCH_WEATHER_DATA";

export const startFetchWeatherData=(userlocation)=>{
	return{
		type: START_FETCH_WEATHER_DATA,
		location: userlocation
	}
};


//Set weather data
export const SET_WEATHER_DATA = "SET_WEATHER_DATA";

export const setWeatherData = (data_to_store) =>{
	return{
		type: "SET_WEATHER_DATA",
		data_to_store
	}
}

//Set defautParams

export const setDefaultParams = (params)=>{
	return{
		type: "SET_DEFAULT_PARAMS",
		params
	}
}

