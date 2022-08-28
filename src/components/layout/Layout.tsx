import { useIsDarkContext } from "../../context/darkContext";
import { NavBar } from "../navbar/NavBar";

export const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	const { isDarkMode } = useIsDarkContext();

	return (
		<div
			className={`transition-colors duration-300 overflow-x-hidden ${
				isDarkMode ? "bg-darkLight text-lightLight" : "bg-lightLight text-darkLight"
			}`}>
			<NavBar />

			<main className="max-w-7xl mx-auto min-h-screen h-full sm:pt-16 pt-32 px-1 sm:px-5 mb-8">
				{children}
			</main>
		</div>
	);
};
