import { Link } from "react-router-dom";
import { ContactLinks } from "../components/navbar/ContactLinks";

// * Imagenes
import heroImage from "../assets/hero.png";
import whoIAm from "../assets/svg/main/WhoIAm.svg";
import typeOfCompany from "../assets/svg/main/coder.svg";

export const Main = () => {
	return (
		<article className="flex flex-col gap-y-4 animate-opacityAnimation">
			<section className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5 w-full justify-items-center items-center pt-2 md:py-4">
				<picture className="select-none">
					<img src={heroImage} className="w-1/2 md:w-3/4 lg:w-1/2 mx-auto" />
				</picture>
				<span className="flex flex-col items-center text-center col-span-2">
					<h1 className="longSize">
						Hello! I'm <b className="text-orange-500">Fabricio</b>
					</h1>

					<small className="shortSize italic">
						Jr. <b className="text-indigo-500">Frontend Developer</b>.
					</small>

					<p className="tinySize my-4">
						I will give a brief description about me, in the tab{" "}
						<Link
							to="/about"
							className="text-blue-400 font-bold hover:text-blue-500 transition-colors duration-300">
							about me
						</Link>{" "}
						you will get more detailed information.
					</p>

					<ContactLinks className="flex my-2 md:mt-2 md:mb-0" />
				</span>
			</section>
			{/* -------------------------------------------------------- */}
			<hr className={`w-1/2 mx-auto border-gray-500/75`} />{" "}
			{/* -------------------------------------------------------- */}
			<section className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5 w-full justify-items-center items-center pt-2 md:py-4">
				<picture className="order-2 select-none">
					<img src={whoIAm} alt="" className="w-1/2 md:w-3/4 mx-auto" />
				</picture>
				<span className="px-4 text-center">
					<h2 className="text-orange-500 font-bold lowMediumSize mt-4">Who am I?</h2>
					<p className="tinySize md:mt-1 md:mb-4 italic">
						I am a 22 year old <b className="text-indigo-500">Argentinian</b> oriented to{" "}
						<b className="text-indigo-500">frontend</b> web development and in a few more months,
						also to <b className="text-indigo-500">backend</b> development.
					</p>

					<h2 className="text-orange-500 font-bold lowMediumSize mt-4">How am I?</h2>
					<p className="tinySize md:mt-1 md:mb-4 italic">
						I'm a <b className="text-indigo-500">self-taught</b> person looking to get out into the
						working world, gain experience through real projects,{" "}
						<b className="text-indigo-500">improve my skills</b>, meet different kinds of talents,{" "}
						<b className="text-indigo-500">teach and learn</b> with a group of peers, and much more.
					</p>

					<h2 className="text-orange-500 font-bold lowMediumSize mt-4">Why me?</h2>
					<p className="tinySize md:mt-1 md:mb-4 italic">
						My love for technology makes me to be in{" "}
						<b className="text-indigo-500">constant learning</b>, either learning new
						functionalities, new tools, new algorithms, etc. On the other hand, I am a person who
						loves to learn and <b className="text-indigo-500">work in a team</b>.
					</p>
				</span>
			</section>
			{/* -------------------------------------------------------- */}
			<hr className={`w-3/4 md:w-1/2 mx-auto border-gray-500/75`} />{" "}
			{/* -------------------------------------------------------- */}
			<section className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5 w-full justify-items-center items-center lg:items-start pt-2 md:py-4 px-8 md:px-1">
				<picture className="order-2 select-none">
					<img src={typeOfCompany} alt="" className="w-1/2 md:w-3/4 mx-auto" />
				</picture>

				<span className="md:order-2 col-span-2">
					<h2 className="text-orange-500 font-bold mediumSize text-center mb-2">
						My dream company
					</h2>

					<ol className="tinySize italic list-disc marker:text-orange-500">
						<li>
							It must use or be <b className="text-indigo-500">updated</b> to{" "}
							<b className="text-indigo-500">new technologies</b> (new frameworks, new versions, new
							methods, etc).
						</li>
						<li>It must have a short and long term goal.</li>
						<li>
							It <b className="text-indigo-500">invests</b> in its employees (courses, equipment,
							etc.) and keeps them <b className="text-indigo-500">motivated</b>, eager to work for
							the company.
						</li>
						<li>
							Is not afraid of risk and invests in <b className="text-indigo-500">new talents</b>.
						</li>
						<li>
							<b className="text-indigo-500">Accepts people</b> regardless of their size, gender,
							culture, etc.
						</li>
					</ol>
				</span>
			</section>
			{/* -------------------------------------------------------- */}
			<hr className={`w-full mx-auto border-gray-500/75`} />{" "}
			{/* -------------------------------------------------------- */}
		</article>
	);
};
