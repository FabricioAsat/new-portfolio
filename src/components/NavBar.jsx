import { ContactLinks } from "./ContactLinks";
export const NavBar = () => {
	return (
		<header className="fixed z-50 top-0 left-0 w-full bg-bgDark border-b border-neutral-800">
			<div className="flex flex-col justify-center md:flex-row md:items-center md:justify-between pb-2 md:py-3 md:px-5 w-full h-full max-w-7xl mx-auto">
				<a
					href="#root"
					className="flex gap-x-1 items-center justify-center transition-colors py-3 md:py-0 text-white"
				>
					<strong className="text-5xl md:text-xl text-sky-500">
						{"<"}Fabricio{" />"}
					</strong>
				</a>

				{/* -- -- -- */}
				<span className="flex items-center justify-center gap-x-10">
					<RouterLinks />
					<ContactLinks className={"hidden md:flex md:items-center md:gap-x-5"} />
				</span>
			</div>
		</header>
	);
};

function RouterLinks() {
	return (
		<nav className={`flex items-center justify-center gap-x-2 text-sm font-semibold`}>
			<a href={"#home"} className={"px-2 py-1 transition-colors text-white hover:text-[#aaa]"}>
				Home
			</a>

			<a href={"#about"} className={"px-2 py-1 transition-colors text-white hover:text-[#aaa]"}>
				About me
			</a>

			<a href={"#skills"} className={"px-2 py-1 transition-colors text-white hover:text-[#aaa]"}>
				Skills
			</a>

			<a href={"#projects"} className={"px-2 py-1 transition-colors text-white hover:text-[#aaa]"}>
				Projects
			</a>
		</nav>
	);
}
