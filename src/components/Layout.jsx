import React from "react";
import { Footer } from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";

const Layout = ({ children }) => {
	return (
		<div className="max-w-6xl w-full mx-auto">
			<NavBar />

			<div className="min-h-screen min-w-full h-full w-full">{children}</div>

			<Footer />
		</div>
	);
};

export default Layout;
