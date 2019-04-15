import React, { Component } from 'react';
import DayList from "./dayItem/dayList"
import gridContainer from "../gridContainer/gridContainer"


const Main = (WrappedComponent) =>{
	return class extends Component{
		render(){
			return (
				<WrappedComponent {...this.props}/>
			)
		}
	}
} 

export default gridContainer(Main(DayList));
