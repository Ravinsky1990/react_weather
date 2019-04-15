const mainDataReducerDefaultState = {}

const mainDataReducer = (state = mainDataReducerDefaultState, action) => {
	switch(action.type){
		case "SET_WEATHER_DATA":
		return{
			...action.data_to_store
		}

		default:
        return state;
	}
}

export default mainDataReducer