import React, {Component} from 'react';
import * as icons from "../../../../src/helpers/weatherCondition";
import _c from "../../../../src/assets/img/thermometer-1_icon-icons.com_65087.png"
import { connect } from 'react-redux';
import {conditionFinder} from "../../../helpers/conditionFinder";
import {dayOrNight} from "../../../helpers/DayOrNight"

class CurrentConditions extends Component{
	render(){
		let currentObj = conditionFinder(icons, this.props.currentCondition.code);
		let curPath = dayOrNight(this.props.currentCondition.icon, currentObj);
		return(	
		<div className="currentCon">
			<span className="currentCon_context">Now - {this.props.currentCondition.text}</span>
			<img src={curPath}></img>
			<span className="currentCon_temp">{this.props.currentTemp}</span>
			<img src={_c}></img> 
		</div>
		)
	}
}

const mapStateToProps = state => {
    return {
        currentCondition: state.weatherData.current.condition,
        currentTemp: state.weatherData.current.temp_c
    };
};



export default connect(mapStateToProps)(CurrentConditions);