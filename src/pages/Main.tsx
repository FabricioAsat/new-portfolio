import { Link } from "react-router-dom";
import { ContactLinks } from "../components/navbar/ContactLinks";

// * Imagenes
import heroImage from "../assets/hero.png";
import whoIAm from "../assets/svg/main/WhoIAm.svg";
import typeOfCompany from "../assets/svg/main/coder.svg";

export const Main = () => {
	return (
		<article className="flex flex-col gap-y-4 animate-opacityAnimation">
			<section className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 gap-y-5 w-full justify-items-center items-center pt-2 md:py-4">
				<picture className="select-none">
					<img src={heroImage} className="w-1/2 md:w-3/4 lg:w-1/2 mx-auto" />
				</picture>
				<span className="flex flex-col items-center text-center col-span-2">
					<h1 className="longSize">
						Hello, I'm <b className="text-teal-500">Fabricio</b>
					</h1>

					<small className="shortSize italic">
						Jr. <b className="text-teal-500">Frontend Developer</b>.
					</small>

					<p className="tinySize my-4">
						I will give a brief description about me, in the tab{" "}
						<Link
							to="/about"
							className="text-blue-400 font-bold hover:text-blue-500 transition-colors duration-300 underline"
						>
							about me
						</Link>{" "}
						you will get more detailed information.
					</p>
					{/* Este span es nuevo */}
					<span className="flex gap-x-4 items-center justify-center my-2 md:mt-2 md:mb-0">
						<a href="#" className="px-3 py-1 bg-teal-500 text-darkDark font-bold rounded-md">
							Curriculum Vitae
						</a>
						{/* Clases de contactLink: my-2 md:mt-2 md:mb-0 */}
						<ContactLinks className="flex" />
					</span>
					{/*  */}
				</span>
			</section>
			{/* -------------------------------------------------------- */}
			<hr className={`w-1/2 mx-auto border-gray-500/75`} />{" "}
			{/* -------------------------------------------------------- */}
			<section className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 gap-y-5 w-full justify-items-center items-center pt-2 md:py-4">
				<picture className="order-2 select-none">
					<img src={whoIAm} alt="" className="w-1/2 md:w-3/4 mx-auto" />
				</picture>
				<span className="px-4 text-center">
					<h2 className="font-bold lowMediumSize mt-4 text-teal-500">Who am I?</h2>
					<p className="tinySize md:mt-1 md:mb-4">
						I am a 22 year old <i className="font-bold">Argentinian</i> oriented to frontend web
						development and in a few more months, also to backend development.
					</p>

					<h2 className="font-bold lowMediumSize mt-4 text-teal-500">How am I?</h2>
					<p className="tinySize md:mt-1 md:mb-4">
						I'm a <i>self-taught</i> person looking to get out into the working world, gain
						experience through real projects, <i>improve my skills</i>, meet different kinds of
						talents, <i>teach and learn</i> with a group of peers, and much more.
					</p>

					<h2 className="font-bold lowMediumSize mt-4 text-teal-500">Why me?</h2>
					<p className="tinySize md:mt-1 md:mb-4">
						My love for technology makes me to be in <i>constant learning</i>, either learning new
						functionalities, new tools, new algorithms, etc. On the other hand, I am a person who
						loves to learn and <i>work in a team</i>.
					</p>
				</span>
			</section>
			{/* -------------------------------------------------------- */}
			<hr className={`w-3/4 md:w-1/2 mx-auto border-gray-500/75`} />{" "}
			{/* -------------------------------------------------------- */}
			<section className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 gap-y-5 w-full justify-items-center items-center lg:items-start pt-2 md:py-4 px-8 md:px-1">
				<picture className="order-2 select-none">
					<img src={typeOfCompany} alt="" className="w-1/2 md:w-3/4 mx-auto" />
				</picture>

				<span className="md:order-2 col-span-2">
					<h2 className="font-bold mediumSize text-center mb-2 text-teal-500">My dream company</h2>

					<ol className="tinySize list-disc marker:text-orange-600">
						<li>
							It must use or be updated to new technologies{" "}
							<i className="font-normal">(new frameworks, new versions, new methods, etc)</i>.
						</li>
						<li>It must have a short and long term goal.</li>
						<li>
							It invests in its employees <i className="font-normal">(courses, equipment, etc.)</i>{" "}
							and keeps them motivated, eager to work for the company.
						</li>
						<li>Is not afraid of risk and invests in new talents.</li>
						<li>Accepts people regardless of their size, gender, culture, etc.</li>
					</ol>
				</span>
			</section>
			{/* -------------------------------------------------------- */}
			<hr className={`w-full mx-auto border-gray-500/75`} />{" "}
			{/* -------------------------------------------------------- */}
		</article>
	);
};
