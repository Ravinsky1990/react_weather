export const dayOrNight = (path, Obj)=>{
	if(path.includes("day")){
		return Obj.path_day
	}else{
		return Obj.path_night
	}
}