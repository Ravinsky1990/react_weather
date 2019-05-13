const iconReducerDefaultState = []

const iconReducer = (state = iconReducerDefaultState, action) => {
	switch(action.type){
		case "SET_ICONS":
		return[
			...action.icons
		]
		default:
        return state;
	}
}

export default iconReducer