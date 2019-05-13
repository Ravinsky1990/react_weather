const uiReducerDefaultState = {
	spinnerState:false,
	sideDrowerState:false,
	backDropState:false,
	modalState:false
}

const uiReducer = (state = uiReducerDefaultState, action) => {
	switch(action.type){
		case "SET_SPINNER":
		return{
			...state,
			spinnerState: action.mode ? true : false
		};
		case "SET_SIDEDROWER":
		return{
			...state,
			sideDrowerState:action.mode ? true : false
		};
		case "SET_BACKDROP":
		return{
			...state,
			backDropState: action.mode ? true : false
		};

		case "SET_MODAL":
		return{
			...state,
			modalState: action.mode ? true : false
		};

		default:
        return state;
	}
}

export default uiReducer