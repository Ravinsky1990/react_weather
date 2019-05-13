import React, {Component} from 'react';
import { connect } from 'react-redux';
import {setBackDrop,setSideDrower} from "../../redux/actions/uiActions"


class Backdrop extends Component{
	clicked=()=>{
		this.props.switchBackdrop(!this.props.show);
		this.props.switchSideDrawer(!this.props.show)
	}
	render(){
		if(this.props.show){
		return (<div className="backdrop" onClick={this.clicked}></div>)
		}else{
			return null
		}
	}
}

const mapStateToProps=(state)=>{
	return{
		show: state.ui.backDropState
	}
};
const mapDispatchToProps = (dispatch)=>{
	return{
		switchBackdrop:(mode)=>dispatch(setBackDrop(mode)),
		switchSideDrawer:(mode)=>dispatch(setSideDrower(mode))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Backdrop);