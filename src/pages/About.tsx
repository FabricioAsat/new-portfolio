import { Link } from "react-router-dom";
import { ContactLinks } from "../components/navbar/ContactLinks";

import like from "../assets/svg/about/likeThings.svg";
import future from "../assets/svg/about/future.svg";
import pair from "../assets/svg/about/pairProgramming.svg";

export const About = () => {
	return (
		<article className="flex flex-col gap-y-5 px-4 animate-opacityAnimation">
			<span className="flex flex-col items-center text-center my-2 sm:my-4">
				<h1 className="longSize font-bold">👋 Hello again!</h1>
				<small className="shortSize italic">Here I will explain myself better</small>

				<ContactLinks className="sm:hidden flex mt-8" />
			</span>
			{/* -------------------------------------------------------- */}
			<hr className={`w-2/3 mx-auto border-gray-500/75`} />{" "}
			{/* -------------------------------------------------------- */}
			<section>
				<h2 className="mediumSize text-center font-bold mb-2 text-teal-500">My story</h2>
				<p className="tinySize">
					Well, my name is <b>Fabricio Daniel Asat</b>, I was born on April 2, 2000 in La Pampa,
					Argentina. Leaving aside my childhood, in my adolescence I started to be interested in
					programming, I wanted to know how programs worked and how I could create them, being that
					my <i>beginning in programming</i>. I went through many programming languages, such as{" "}
					<b>C - C++, Python, Java, Golang</b> and finally 1 year ago I started with{" "}
					<b className="text-yellow-500">JavaScript</b>, which I fell in love with. It was then when
					I decided to get into web development, I chose to start with <i>Frontend</i> (because it's
					easier in my opinion) using <i>React.js</i>, I did small and more complex{" "}
					<Link
						to={"/projects"}
						className={
							"text-blue-400 font-bold hover:text-blue-500 transition-colors duration-300 underline"
						}
					>
						projects
					</Link>{" "}
					until the point where I am now.
				</p>
			</section>
			<section className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 gap-y-5 w-full justify-items-center items-center lg:items-start pt-2 md:py-4 pl-4">
				<picture className="order-2 select-none">
					<img src={like} alt="Like thinks" className="w-1/2 sm:1/3 md:w-3/4 mx-auto" />
				</picture>
				<span className="col-span-2">
					<h2 className="mediumSize text-center font-bold mb-2 text-teal-500">What do I like?</h2>
					<ol className="tinySize list-disc marker:text-orange-600 w-full text-start">
						<li>
							I <i>love programming</i> and if I do it while listening to LOFI I lose track of time.
						</li>
						<li>
							I like to spend my weekends programming in the morning/afternoon and{" "}
							<i>playing video games</i> at night.
						</li>
						<li>
							I like to implement new features to my programs or create new projects using{" "}
							<i>new technologies</i>.
						</li>
						<li>
							When I get stuck while programming, either because of bugs or other things, I like to
							<i> go outside and breathe fresh air</i> for a while.{" "}
						</li>
						<li>
							I love <i>animals</i>, I have some very cute pets that I like to spoil, do you want to{" "}
							<Link to={"/pets"} className="animate-pulse italic">
								see
							</Link>{" "}
							them?
						</li>
					</ol>
				</span>
			</section>
			{/* -------------------------------------------------------- */}
			<hr className={`w-1/2 mx-auto border-gray-500/75`} />{" "}
			{/* -------------------------------------------------------- */}
			<section className="flex flex-col items-center">
				<span className="mb-2 text-center">
					<h2 className="mediumSize font-bold text-teal-500">Explaining more about me</h2>
					<p className="tinySize italic">
						I am in my third year of systems engineering, however, everything I know about web
						development I have learned on my own.
					</p>
				</span>

				<aside className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 gap-y-5 w-full justify-items-center items-center lg:items-start pt-2 md:py-4 pl-4">
					<picture className="select-none">
						<img src={future} alt="More about" className="w-1/2 sm:1/3 md:w-3/4 mx-auto" />
					</picture>

					<span className="flex flex-col col-span-2">
						<h3 className="lowMediumSize font-bold text-center text-orange-500">
							Short and long term objectives.
						</h3>
						<small className="text-center italic mb-4">
							These will range from short to long term.
						</small>
						<ol className="tinySize list-disc marker:text-orange-500 w-full text-start mb-4">
							<li>
								Getting my first work experience as a frontend or backend developer, and learning
								from my more experienced colleagues.
							</li>
							<li>
								Improve my frontend and backend skills, through different types of{" "}
								<i>new frameworks and programming methods and/or languages</i>.
							</li>
							<li>
								Once I am a fullstack developer, look for new and more optimal options for the job.
							</li>
							<li>
								Develop new projects and/or <i>lead</i> working groups.{" "}
							</li>
						</ol>
					</span>
				</aside>
			</section>
			{/* -------------------------------------------------------- */}
			<hr className={`w-1/2 mx-auto border-gray-500/75`} />{" "}
			{/* -------------------------------------------------------- */}
			<section className="flex flex-col gap-y-5 items-center">
				<span className="text-center">
					<h2 className="mediumSize font-bold text-teal-500">How do I work?</h2>
					<small className="italic tinySize">
						I'm going to talk about the way I work when I do my projects. From inception to
						deployment.
					</small>
				</span>
				<aside className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 gap-y-5 w-full justify-items-center items-center pt-2 md:py-4	">
					<picture className="order-2 select-none">
						<img src={pair} alt="" className="w-1/2 sm:1/3 md:w-full lg:w-3/4 mx-auto" />
					</picture>

					<span className="col-span-2">
						<p className="tinySize italic">
							Well, this is quite interesting since nobody taught me how to do it, it was practice
							after practice. If you see my first{" "}
							<Link
								to={"/projects"}
								className={
									"text-blue-400 font-bold hover:text-blue-500 transition-colors duration-300 underline"
								}
							>
								projects
							</Link>
							, you'll know what I'm talking about. I didn't think about design, I didn't think
							about code optimization, I just made stuff. Over time, I paid more attention to
							design, to code, to creating reusable components, to the best options, and so on. To
							this day, this is the way I work.{" "}
						</p>
					</span>
				</aside>

				<ol className="tinySize list-disc marker:text-orange-500 w-full max-w-3xl text-start pl-4">
					<li>
						I start by <i>thinking</i> about what I'm going to do.
					</li>
					<li>
						Once it's done, I think about the <i>design</i>, do a quick sketch in my head or maybe
						on paper.
					</li>
					<li>
						I decide what <i>technologies</i> I'm going to use.{" "}
					</li>
					<li>
						I start coding. I put in the <i>design</i>, the <i>style</i>, the <i>logic</i>, etc.
					</li>
					<li>
						Once the prototype is done, I upload it and seek <i>feedback</i> from a third party (my
						brother).
					</li>
					<li>
						I <i>update</i> the small bugs, <i>optimize</i> the code, <i>improve</i> the styles,{" "}
						<i>remove</i> the junk code and publish it.
					</li>
				</ol>
			</section>
			{/* -------------------------------------------------------- */}
			<hr className={`w-full border-gray-500/75`} />
			{/* -------------------------------------------------------- */}
		</article>
	);
};
