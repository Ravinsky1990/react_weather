import React from 'react';

const gridContainer = (WrappedComponent) => {
	return (props)=>{
		return(
			<div className="container">
				<WrappedComponent {...props}/>
			</div>
		)
	}
}

export default gridContainer