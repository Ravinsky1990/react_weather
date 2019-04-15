const defaultParamReducer_d_state = {
	city: null
}

const defaultParamReducer = (state = defaultParamReducer_d_state, action) => {
	switch(action.type){
		case "SET_DEFAULT_PARAMS":
		return{
			city:action.params.cityName
		}

		default:
        return state;
	}
}

export default defaultParamReducer