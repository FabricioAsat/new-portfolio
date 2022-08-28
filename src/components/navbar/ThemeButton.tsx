import { useIsDarkContext } from "../../context/darkContext";

import darkButton from "../../assets/svg/turnOn.svg";
import ligthButton from "../../assets/svg/turnOff.svg";

export const ThemeButton = () => {
	const { isDarkMode, changeTheme } = useIsDarkContext();

	return (
		<button
			className={`w-7 select-none transition-all duration-300 ${
				isDarkMode ? "hover:brightness-75" : "hover:brightness-150"
			}`}
			onClick={() => changeTheme()}>
			{isDarkMode && <img src={darkButton} />}
			{!isDarkMode && <img src={ligthButton} />}
		</button>
	);
};
