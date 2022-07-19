import React from "react";

import { NavLink } from "react-router-dom";

const Logo = () => {
	return (
		<NavLink
			to="/"
			className={`lowLongSize md:mediumSize font-bold px-2 pt-1 hover:text-sky-500 transition-colors duration-500`}>
			Portfolio
		</NavLink>
	);
};

export default Logo;
