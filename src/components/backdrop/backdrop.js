import React, {Component} from "react";

class Backdrop extends Component{
	render(){
		return(
			props.show ? <div className="backdrop"></div> : null
		)
	}
}

export default Backdrop