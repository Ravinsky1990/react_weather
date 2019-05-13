const selectReducerDefState = [
	"maxtemp_c",
	'mintemp_c',
	"maxwind_kph",
	'totalprecip_mm',
	"avghumidity"
]

const selectReducer = (state = selectReducerDefState, action) => {
	switch(action.type){
		case "ADD_CONDITION":
		let arr = [...state]
		if(action.mode){
			arr.push(action.condition);
			return[
				...arr
			]
		}else{
			let index = state.indexOf(action.condition);
			arr.splice(index,1);
			return[...arr]
		}
		
		default:
        return state;
	}
}

export default selectReducer