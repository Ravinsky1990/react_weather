// let returnObj={
// 	date_epoch: 0,
// 	condition:{
// 		code:0,
// 		icon:"",
// 		text:""
// 	},
// 	date_conditions:[{
// 		value:"",
// 		name:""
// 	},{}]
// }

export const conditionFilter = (serverData, config)=>{
	let resultArr = [];
	serverData.forEach((dayItem)=>{
		resultArr.push({
			date_epoch: dayItem.date,
			condition:{
				code:dayItem.day.condition.code,
				icon:dayItem.day.condition.icon,
				text:dayItem.day.condition.text
			},
			date_conditions:config.map((conString)=>{
				if(dayItem.astro.hasOwnProperty(conString)){
					return{
						value:dayItem.astro[conString],
						name: conString
					}
				}else if(dayItem.day.hasOwnProperty(conString)){
					return{
						value:dayItem.day[conString],
						name: conString
					}
				}
			})
		})
	});
	return resultArr

}