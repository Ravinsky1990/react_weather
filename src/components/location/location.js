import React, { Component } from 'react';
import gridContainer from "../gridContainer/gridContainer";
//import axios from "axios";
import {connect} from 'react-redux';
//actions
import {startFetchWeatherData} from "../../redux/actions/actions"

class Location extends Component{

	state={
		clientLocation: "",
		error: ""
	}

  //change default location
  changeClientLocation=(e)=>{
  	let value = e.target.value;
  	this.setState({
  		clientLocation: value,
  		error:""
  	})

  }

  onSubmit=(e)=>{
  	 e.preventDefault();
  	 console.log(this.state.clientLocation)

  	 //Validation
  	 if(this.state.clientLocation === ""){
  	 	this.setState({
  	 		error: "Please enter your location!"
  	 	})
  	 }
  	 else{
      this.props.on_Start_Set_WeatherData(this.state.clientLocation);
    }
  }

	render(){
		return(
			<div className="location">
				<form onSubmit={this.onSubmit}>
					<label htmlFor="loc" className="location__label">Change default location:</label>
					<input id="loc"
					type="text"
					value={this.state.clientLocation}
					className="location__input"
					placeholder="Enter your location"
					onChange={this.changeClientLocation}
					 />
					 <button className="location__btn">Change</button>
				</form>
				<p>{this.state.error}</p>
        <p></p>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => {
    return {
      on_Start_Set_WeatherData: (userLocation) => dispatch(startFetchWeatherData(userLocation)),
        
    }
}

export default connect(undefined,mapDispatchToProps)(gridContainer(Location))