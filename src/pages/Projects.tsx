import { ContactLinks } from "../components/navbar/ContactLinks";
import { useIsDarkContext } from "../context/darkContext";

import { dataProyects } from "../database/dbProyects";

export const Projects = () => {
	return (
		<article className="flex flex-col gap-y-5 animate-opacityAnimation">
			<span className="flex flex-col gap-y-2 items-center text-center my-2 sm:my-4">
				<h1 className="lowLongSize text-orange-500 font-bold">My Projects!</h1>

				<small className="lowShortSize italic">
					These are all the projects I have published. Some very basic, others more complex. Anyway
					you can see them if you want.
				</small>

				<ContactLinks className="sm:hidden flex mt-2 gap-x-8" />
			</span>
			{/* -------------------------------------------------------- */}
			<hr className={`w-2/3 mx-auto border-gray-500/75`} />{" "}
			{/* -------------------------------------------------------- */}
			<section className="flex flex-col gap-y-5 max-w-5xl mx-auto">
				{dataProyects.map(({ title, img, info, link }, index) => (
					<Proyect key={index} title={title} img={img} info={info} link={link} number={index + 1} />
				))}
			</section>
			{/* -------------------------------------------------------- */}
			<hr className={`w-full mx-auto border-gray-500/75`} />{" "}
			{/* -------------------------------------------------------- */}
		</article>
	);
};

function Proyect({
	title,
	img,
	info,
	link,
	number,
}: {
	title: string;
	img: string;
	info: string;
	link: string;
	number: number;
}) {
	const { isDarkMode } = useIsDarkContext();

	return (
		<div
			className={`grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-3 justify-items-center py-5 px-6 rounded-2xl ${
				isDarkMode ? "bg-lightLight/10" : "bg-darkDark/10"
			}`}>
			<picture className="my-auto select-none">
				<img src={img} alt="" className="w-full max-w-md mx-auto" />
			</picture>

			<aside className="flex flex-col justify-between h-full col-span-2">
				<span>
					<h1 className="text-orange-500 font-bold text-center mediumSize">
						{number} - {title}
					</h1>
					<p className="tinySize italic">{info}</p>
				</span>

				<nav className="ml-auto mt-4 hover:animate-scaleAnimation hover:brightness-110 select-none">
					<a
						href={link}
						rel="noopener noreferrer"
						target="_blank"
						className={"text-blue-400 shortSize font-extrabold"}>
						View project
					</a>
				</nav>
			</aside>
		</div>
	);
}
