import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addDel_conditions} from "../../redux/actions/selectActions";


class SideMenuItem extends Component{
	state={
		checked:false
	}
	clicked=()=>{
		this.setState((prevState)=>{
			return{
				checked:!prevState.checked
			}
		});
		this.props.addCondition(!this.state.checked,this.props.conditionName.toLowerCase())
	}
	render(){
		let circulClasses = ["circle"];
		if(this.state.checked){
			circulClasses = ["circle", "checked"]
		}
		return(
			<li className="sideMenuItem" onClick={this.clicked}>
				<span className={circulClasses.join(" ")}></span>
				<span className="sideMenuItem_caption">{this.props.conditionName}</span>
			</li>
		)
	}
}


const mapDispatchToProps = (dispatch)=>{
	return{
		addCondition:(mode, condition)=>dispatch(addDel_conditions(mode, condition))
	}
}

export default connect(undefined,mapDispatchToProps)(SideMenuItem);