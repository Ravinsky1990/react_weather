import React from 'react';
import InfoItem from "./infoItem";
import {getWd} from "../../../helpers/getDayofW";
import * as icons from "../../../helpers/weatherCondition";
import {conditionFinder} from "../../../helpers/conditionFinder";
import {dayOrNight} from "../../../helpers/DayOrNight"

const dayItem = (props) => {
	let currentObj = conditionFinder(icons, props.day_data.condition.code);
	let curPath = dayOrNight(props.day_data.condition.icon, currentObj);
	return(
		<div className="dayItem">
			<div className="dayDescr">
				<span className="dayDescr_cur">{getWd(props.day_data.date_epoch)}</span>
				<img src={curPath} alt="day"></img>
			</div>
			<div className="dayItem__infoItemWrap">
				{props.day_data.date_conditions.map((day_info)=>{
					return <InfoItem infoData={day_info} key={day_info.name}/>
				})}
			</div>
		</div>
	)
}

export default dayItem