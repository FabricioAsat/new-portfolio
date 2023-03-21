import { Footer } from "../Footer";
import { NavBar } from "../NavBar";

export const Layout = ({ children }) => {
	return (
		<>
			<NavBar />
			<main>{children}</main>
			<Footer />
		</>
	);
};
