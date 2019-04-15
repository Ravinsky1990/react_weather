import React, { Component } from 'react';
import Backdrop from "../backdrop/backdrop"

class Modal extends Component{
	render(){
		return(
			<React.Fragment>
	            <Backdrop/>
	            <div
	                className="modal"
	                style={{
	                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
	                    opacity: this.props.show ? '1' : '0'
	                }}>
	                {this.props.children}
	            </div>
	        </React.Fragment>
		)
	}
}

export default Modal