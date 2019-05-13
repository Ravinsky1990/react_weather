import React, {Component} from 'react';
import DayItem from "./dayItem";
import { connect } from 'react-redux';
import {startFetchWeatherData} from "../../../redux/actions/actions";
import CurrentConditions from "./currentCondition";
import {conditionFilter} from "../../../helpers/conditionFilter"

class DayList extends Component {
	componentDidMount(){
      this.props.startFetchWeatherData("Kiev")
  }
	render(){
		if(this.props.dataTorender.forecast){
			//filter logic
			let filteredData = conditionFilter(this.props.dataTorender.forecast.forecastday,this.props.config)
			console.log(filteredData)
			return(
				<div className="d_List">
					<CurrentConditions/>
					{filteredData.map((day)=>{
						return <DayItem day_data={day} key={day.date_epoch}/>
					})}
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
      dataTorender: state.weatherData,
      config: state.select
    };
};
const mapDispatchToProps = dispatch => {
  return {
    startFetchWeatherData: (userlocation)=>dispatch(startFetchWeatherData(userlocation))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(DayList);