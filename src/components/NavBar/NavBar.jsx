import React from "react";
import LinksContainer from "./LinksContainer";
import Logo from "./Logo";

const NavBar = () => {
	return (
		<nav className="fixed z-50 flex items-center justify-between md:justify-start w-full max-w-6xl h-14 pl-4 pr-4 shadow-md shadow-dark/10 md:h-16 bg-fondo">
			<Logo />
			<LinksContainer />
		</nav>
	);
};

export default NavBar;
