import { useIsDarkContext } from "../../context/darkContext";
import { ContactLinks } from "./ContactLinks";
import { RouterLinks } from "./RouterLinks";
import { ThemeButton } from "./ThemeButton";
import { Logo } from "./Logo";

export const NavBar = () => {
	const { isDarkMode } = useIsDarkContext();

	return (
		<div
			className={`fixed z-50 h-auto w-full shadow-md shadow-darkDark ${
				isDarkMode ? "bg-darkDark" : "bg-darkLight"
			}`}>
			<span className="flex flex-col items-center gap-y-3 w-full max-w-7xl pb-4 sm:pb-0 mx-auto">
				<nav className="flex justify-center gap-x-5 sm:gap-x-0 sm:justify-between w-full px-4">
					<Logo />
					<RouterLinks className="hidden sm:flex" />
					<nav className="flex items-center gap-x-5 lg:gap-x-8">
						<ContactLinks className="hidden sm:flex" />
						<ThemeButton />
					</nav>
				</nav>

				<RouterLinks className="flex sm:hidden" />
			</span>
		</div>
	);
};
