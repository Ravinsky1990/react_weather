import React, {Component} from 'react';
import DayItem from "./dayItem";
import { connect } from 'react-redux';
import {startFetchWeatherData} from "../../../redux/actions/actions";
import CurrentConditions from "./currentCondition";

class DayList extends Component {
	componentDidMount(){
      this.props.startFetchWeatherData("Kiev")
  }
	render(){
		if(this.props.dataTorender.forecast){
			return(
				<div className="d_List">
					<CurrentConditions/>
					{this.props.dataTorender.current.cloud}
				</div>
			)
		}else{
			return(
				<div className="d_List">
					<p>Loadding...</p>
				</div>
			)
		}	
	}
}

const mapStateToProps = state => {
    return {
        dataTorender: state.weatherData
    };
};
const mapDispatchToProps = dispatch => {
  return {
    startFetchWeatherData: (userlocation)=>dispatch(startFetchWeatherData(userlocation))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(DayList);