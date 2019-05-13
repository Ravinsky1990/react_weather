export const getWd = (date_epoch)=>{
	const daysNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	const new_date = new Date(date_epoch);
	const day = new_date.getDay();
	return daysNames[day]
}