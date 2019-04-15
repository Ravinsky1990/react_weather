import React,{Component} from 'react';
import logoImg from "../../../assets/img/logo.png";
import {connect} from "react-redux"

class Logo extends Component{
	render(){
		return(
		<div className="logo">
			<img src={logoImg} alt="logo" className="logo__img"></img>
			<span className="logo__location">{this.props.cityName}</span>
		</div>
	)
	}
}

const mapStateToProps = state => {
    return {
        cityName:state.defaultParam.city
    };
};

export default connect(mapStateToProps,undefined)(Logo)