import React,{Component} from 'react';
import { connect } from 'react-redux';
import {setBackDrop, setSideDrower} from "../../../redux/actions/uiActions"

class Menu extends Component{
	clicked=()=>{
		this.props.switchBackdrop(true);
		this.props.switchSideDrawer(true)
	}
	render(){
		return(
			<nav className="navBar">
				<button onClick={this.clicked} className="navBar__Btnlink">Options</button>
			</nav>
		)
	}
}

const mapDispatchToProps = (dispatch)=>{
	return{
		switchBackdrop:(mode)=>dispatch(setBackDrop(mode)),
		switchSideDrawer: (mode)=>dispatch(setSideDrower(mode))
	}
}


export default connect(undefined,mapDispatchToProps)(Menu);