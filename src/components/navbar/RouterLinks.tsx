import { NavLink } from "react-router-dom";

export const RouterLinks = ({ className }: { className: string }) => {
	return (
		<nav
			className={`items-center gap-x-6 lowMediumSize sm:shortSize font-bold transition-colors ${className}`}
		>
			<NavLink
				to={"/about"}
				className={({ isActive }) =>
					isActive
						? "italic text-white duration-300"
						: "text-gray-400/90 hover:brightness-125 transition-all duration-300"
				}
			>
				About me
			</NavLink>

			<NavLink
				to={"/skills"}
				className={({ isActive }) =>
					isActive
						? "italic text-white duration-300"
						: "text-gray-400/90 hover:brightness-125 transition-all duration-300"
				}
			>
				Skills
			</NavLink>

			<NavLink
				to={"/projects"}
				className={({ isActive }) =>
					isActive
						? "italic text-white duration-30 animate-translateRigthAnimation1"
						: "text-gray-400/90 hover:brightness-125 transition-all  duration-300 animate-translateRigthAnimation1"
				}
			>
				Projects
			</NavLink>
		</nav>
	);
};
