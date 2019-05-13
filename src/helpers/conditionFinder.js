export const conditionFinder = (conditionList, currentCode) =>{
	for (let icon in conditionList){
		if(conditionList[icon].code === currentCode){
			return {
				...conditionList[icon]
			}
		}
	}

	return false
  
}