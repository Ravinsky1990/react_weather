const uiReducerDefaultState = {
	spinnerState:false
}

const uiReducer = (state = uiReducerDefaultState, action) => {
	switch(action.type){
		case "SET_SPPINER_ON":
		return{
			
		}

		default:
        return state;
	}
}

export default uiReducer