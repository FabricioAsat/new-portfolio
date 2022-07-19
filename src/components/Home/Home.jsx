import programmingImage from "../../assets/programming.svg";
import workingImage from "../../assets/working.svg";

import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="flex flex-col pt-4 sm:gap-8">
			<article className="inline-flex flex-col-reverse gap-y-4 sm:flex-row justify-evenly items-center">
				<aside className="text-center">
					<h2 className="bigSize">Hello, I'm</h2>
					<h2 className="bigSize font-bold text-sky-500 rounded-full">Fabricio</h2>
					<small className="lowMediumSize italic block">Frontend Developer Jr.</small>

					<Link to="/proyects">
						<button className="py-1 px-2 text-fondo my-3 bg-sky-500 rounded-full lowShortSize font-bold hover:scale-105 transition-transform duration-300 select-none">
							My proyects
						</button>
					</Link>
				</aside>

				<img
					src={programmingImage}
					alt="Programming"
					className="max-w-xs md:max-w-md sm:max-w-sm"
				/>
			</article>

			<article className="flex flex-col lg:flex-row justify-start items-center lg:items-start gap-y-4">
				<aside className="flex flex-col items-center px-4 w-full max-w-xl">
					<h2 className="mediumSize font-bold">Who I am?</h2>
					<p className="lowShortSize">
						I'm <b className="text-sky-500">Fabricio Daniel Asat</b>, 22 years old Argentinian. I am
						currently in my third year of <b className="text-sky-500">Systems Engineering</b>, I
						have been learning web development in a <b className="text-sky-500">self-taught</b> way
						for about 1 year. To date I have managed to learn several{" "}
						<Link to="/skills" className="lowShortSize text-sky-500 font-bold">
							technologies
						</Link>
					</p>
				</aside>

				<aside className="flex flex-col items-center justify-start pl-6 pr-4 w-full max-w-xl">
					<h2 className="mediumSize font-bold">What I like?</h2>
					<ol className="list-disc list-outside">
						<li className="text-sky-500">
							<small className="text-primero lowShortSize italic">
								Listening to music while programming helps me{" "}
								<b className="font-bold text-sky-500">concentrate</b> on what I'm doing.
							</small>
						</li>

						<li className="text-sky-500">
							<small className="text-primero lowShortSize italic">
								I like to watch sports or play video games, so I{" "}
								<b className="font-bold text-sky-500">don't get burned out</b> on programming.
							</small>
						</li>

						<li className="text-sky-500">
							<small className="text-primero lowShortSize italic">
								I love to <b className="font-bold text-sky-500">learn new technologies</b> and{" "}
								<b className="font-bold text-sky-500">keep updating myself</b> until I master them.
							</small>
						</li>

						<li className="text-sky-500">
							<small className="text-primero lowShortSize italic">
								Spending time with my pets. Do you want to{" "}
								<Link to="/pets" className="lowShortSize font-bold animate-pulse">
									see
								</Link>{" "}
								them?
							</small>
						</li>
					</ol>
				</aside>
			</article>

			<article className="pt-4 flex flex-col items-center">
				<aside className="text-center px-4 max-w-3xl">
					<h2 className="longSize font-extrabold">How I work</h2>
					<p className="tinySize italic">
						I will talk about how I work when it comes to thinking and realizing a project and how I
						improve with the creation of each one. This is easily seen on a project-by-project
						basis.
					</p>
				</aside>

				<aside className="flex flex-col sm:flex-row gap-y-4 justify-between items-center sm:items-start pt-4 w-full px-4">
					<picture className="">
						<img
							src={workingImage}
							alt="Programming"
							className="mx-auto w-9/12 max-w-xs md:max-w-md sm:max-w-sm"
						/>
					</picture>

					<article className="w-10/12">
						<h3 className="shortSize font-bold text-center">¡Let's start!</h3>
						<aside className="flex flex-col gap-y-1">
							<p className="tinySize">
								<b className="text-sky-500">First: </b> I think about a project I want to do.
							</p>
							<p className="tinySize">
								<b className="text-sky-500">Second: </b> I analyze and choose the technologies I'm
								going to use, how I'm going to style and what kind of layout I'm going to use, what
								packaging I'm going to use, libraries, etc.
							</p>
							<p className="tinySize">
								<b className="text-sky-500">Third: </b> I start writing the code. I never have a
								design done, so I design as I code.
							</p>
							<p className="tinySize">
								<b className="text-sky-500">Fourth: </b> Once finished, I seek <b>feedback</b> from
								a third party (my brother), and <b>fix bugs, design problems, etc</b>.
							</p>
						</aside>
					</article>
				</aside>
			</article>
		</div>
	);
};

export default Home;
