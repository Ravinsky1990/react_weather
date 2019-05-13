import React from 'react';
import logo from "../../assets/img/logo.png";
import gridContainer from "../gridContainer/gridContainer"

const footer = () => {
	return(
		<footer className="footer">
			<div className="footer__img">
				<img alt="footerLogo" src={logo}></img>
			</div>
			<div className="footer__link"><a href="https://github.com/Ravinsky1990/react_weather">GitHub</a></div>
		</footer>
	)
}

export default gridContainer(footer)