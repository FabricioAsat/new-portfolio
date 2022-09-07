import { useIsDarkContext } from "../../context/darkContext";
import { NavBar } from "../navbar/NavBar";

export const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
	const { isDarkMode } = useIsDarkContext();

	return (
		<div
			className={`flex flex-col items-center transition-colors duration-300 overflow-x-hidden ${
				isDarkMode ? "bg-darkLight text-gray-200 " : "bg-lightLigth text-darkLight "
			}`}>
			<NavBar />

			<main className="max-w-7xl mx-auto min-h-screen h-full sm:pt-16 pt-32 px-1 sm:px-5">
				{children}
			</main>

			<small
				className={`tinySize italic text-center mt-1 mb-4 ${
					isDarkMode ? "text-gray-400/75" : "text-darkLight"
				}`}>
				Made with love and a few cups of coffee
			</small>
		</div>
	);
};
