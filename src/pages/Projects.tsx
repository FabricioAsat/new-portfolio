import { ContactLinks } from "../components/navbar/ContactLinks";

import { dataProyects } from "../database/dbProyects";

import githubImage from "../assets/svg/github.svg";
import { useState } from "react";

export const Projects = () => {
	const [viewAll, setViewAll] = useState(false);

	return (
		<article className="flex flex-col gap-y-5 animate-opacityAnimation">
			<span className="flex flex-col gap-y-2 items-center text-center my-2 sm:my-4">
				<h1 className="lowLongSize font-bold text-teal-500">My Projects!</h1>

				<small className="lowShortSize italic">
					These are all the projects I have published. Some very basic, others more complex. Anyway
					you can see them if you want.
				</small>

				<ContactLinks className="sm:hidden flex mt-2 gap-x-8" />
			</span>
			<p className="text-center sm:text-start italic shortSize max-w-3xl mx-auto w-full">
				Latest updates...
			</p>
			{/* -------------------------------------------------------- */}
			<hr className={`w-2/3 mx-auto border-gray-500/75`} />{" "}
			{/* -------------------------------------------------------- */}
			<section className="flex flex-col gap-y-5 max-w-5xl mx-auto">
				{dataProyects
					.slice(0, viewAll ? dataProyects.length : 3)
					.map(({ title, img, info, linkDemo, linkGithub, date }, index) => (
						<Proyect
							key={index}
							title={title}
							img={img}
							info={info}
							linkDemo={linkDemo}
							linkGithub={linkGithub}
							last={(viewAll && index + 1 !== dataProyects.length) || (!viewAll && index + 1 !== 3)}
							date={date}
						/>
					))}
			</section>
			<button
				onClick={() => setViewAll(!viewAll)}
				className="text-center sm:text-start italic font-bold shortSize max-w-3xl mx-auto w-full hover:text-teal-500"
			>
				{viewAll ? "▲ Show less" : "▼ Show more"}
			</button>
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
	linkDemo,
	linkGithub,
	date,
	last,
}: {
	title: string;
	img: string;
	info: string;
	linkDemo: string;
	linkGithub: string;
	date: Date;
	last: boolean;
}) {
	return (
		<>
			<div
				className={`grid grid-cols-1 sm:grid-cols-3 sm:gap-x-4 gap-y-3 justify-items-center py-5 px-6 rounded-2xl max-w-3xl`}
			>
				<picture className="flex flex-col items-center justify-center gap-y-1 select-none">
					<small className="tinySize italic font-bold brightness-50">
						{date.toLocaleDateString()}
					</small>
					<img
						src={img}
						alt=""
						className="w-3/4 max-w-xs sm:w-full sm:max-w-md mx-auto rounded-xl border border-darkLight/50"
					/>
				</picture>

				<aside className="flex flex-col justify-between h-full col-span-2 max-w-xs sm:max-w-full">
					<span>
						<h1 className="text-orange-500 font-bold text-center lowMediumSize italic">{title}</h1>
						<p className="tinySize text-center sm:text-start">{info}</p>
					</span>

					<nav className="flex items-center gap-x-6 justify-center sm:justify-end mt-4 select-none">
						<a
							href={linkGithub}
							rel="noopener noreferrer"
							target="_blank"
							className="hover:animate-scaleAnimation hover:brightness-125 transition-all duration-300 cursor-pointer"
						>
							<img src={githubImage} alt="" className="w-7" />
						</a>

						<a
							href={linkDemo}
							rel="noopener noreferrer"
							target="_blank"
							className={
								"shortSize font-extrabold italic hover:translate-x-2 transition-transform duration-700 hover:text-teal-500"
							}
						>
							Deploy ▶
						</a>
					</nav>
				</aside>
			</div>
			{last && <hr className={`max-w-xs w-3/4 mx-auto border-teal-500/50`} />}
		</>
	);
}
