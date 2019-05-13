import React from 'react';
//default
import maxtemp from "../../../../src/assets/icons/conditionIcons/maxtemp.svg";
import mintemp from "../../../../src/assets/icons/conditionIcons/mintemp.svg";
import windspeed from "../../../../src/assets/icons/conditionIcons/windspeed.svg";
import recip from "../../../../src/assets/icons/conditionIcons/recip.svg";
//addition
import sunrise from "../../../../src/assets/icons/conditionIcons/sunrise.svg";
import sunset from "../../../../src/assets/icons/conditionIcons/sunset.svg";
import moonrise from "../../../../src/assets/icons/conditionIcons/moonrise.svg";
import moonset from "../../../../src/assets/icons/conditionIcons/moonset.svg";
import humidity from "../../../../src/assets/icons/conditionIcons/humiditi.svg"



const infoItem = (props) => {
	switch(props.infoData.name){
		case "maxtemp_c":
		return(	
		 	<div className="infoItem">
		 		<span className="infoItem_name">maxtemp.</span>
				<img src={maxtemp}alt="maxtemp"></img>
		 		<span className="infoItem_value">{props.infoData.value}</span>
		 	</div>
		);

		case "mintemp_c":
		return(	
		 	<div className="infoItem">
		 		<span className="infoItem_name">mintemp.</span>
				<img src={mintemp} alt="mintemp"></img>
		 		<span className="infoItem_value">{props.infoData.value}</span>
		 	</div>
		);

		case "maxwind_kph":
		return(	
		 	<div className="infoItem">
		 		<span className="infoItem_name">wind speed</span>
				<img src={windspeed} alt="windspeed"></img>
		 		<span className="infoItem_value">{props.infoData.value} kph</span>
		 	</div>
		);

		case "totalprecip_mm":
		return(	
		 	<div className="infoItem">
		 		<span className="infoItem_name">precipitation </span>
				<img src={recip} alt="recip"></img>
		 		<span className="infoItem_value">{props.infoData.value} mm</span>
		 	</div>
		);

		case "moonrise":
		return(	
		 	<div className="infoItem">
		 		<span className="infoItem_name">moonrise</span>
				<img src={moonrise} alt="moonrise"></img>
		 		<span className="infoItem_value">{props.infoData.value}</span>
		 	</div>
		);

		case "moonset":
		return(	
		 	<div className="infoItem">
		 		<span className="infoItem_name">moonset</span>
				<img src={moonset} alt="moonset"></img>
		 		<span className="infoItem_value">{props.infoData.value}</span>
		 	</div>
		);

		case "sunrise":
		return(	
		 	<div className="infoItem">
		 		<span className="infoItem_name">sunrise</span>
				<img src={sunrise} alt="sunrise"></img>
		 		<span className="infoItem_value">{props.infoData.value}</span>
		 	</div>
		);

		case "sunset":
		return(	
		 	<div className="infoItem">
		 		<span className="infoItem_name">sunset</span>
				<img src={sunset} alt="sunset"></img>
		 		<span className="infoItem_value">{props.infoData.value}</span>
		 	</div>
		);
		case "avghumidity":
		return(	
		 	<div className="infoItem">
		 		<span className="infoItem_name">humidity</span>
				<img src={humidity} alt="humidity"></img>
		 		<span className="infoItem_value">{props.infoData.value} %</span>
		 	</div>
		);
		default:
		return(	
		 	<div className="infoItem">
		 		<span className="infoItem_name">no data</span>
		 		<span className="infoItem_value">no data</span>
		 	</div>
		);
	}

}

export default infoItem