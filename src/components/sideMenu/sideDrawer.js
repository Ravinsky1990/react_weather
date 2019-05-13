import React, {Component} from 'react';
import Backdrop from "./backdrop";
import { connect } from 'react-redux';
import SideMenuItem from "./sideMenuItem"


class SideDrawer extends Component{
	render(){
		let classes = ["sideMenu","close"];
		if(this.props.open){
		classes = ["sideMenu","open"]
	}
	return(
		<React.Fragment>
			<Backdrop/>
			<div className={classes.join(' ')}>
				<ul>
					<SideMenuItem conditionName="Sunrise"/>
					<SideMenuItem conditionName="Sunset"/>
					<SideMenuItem conditionName="Moonrise"/>
					<SideMenuItem conditionName="Moonset"/>
				</ul>
			</div>
		</React.Fragment>
	)
	}
}

const mapStateToProps=(state)=>{
 	return{
		open: state.ui.sideDrowerState
	}
}

export default connect(mapStateToProps, undefined)(SideDrawer);