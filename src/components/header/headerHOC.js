import React from 'react';
import Logo from "./logo/logo"
import Menu from "./menu/menu"
import gridContainer from "../gridContainer/gridContainer"

const header = (logo, menu) => {
	return (props)=>(
		<header>
			<div className="header__links">
				<Logo />
				<Menu />
			</div>
		</header>
	)
}

export default gridContainer(header(Logo, Menu));