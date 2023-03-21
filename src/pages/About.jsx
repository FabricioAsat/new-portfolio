import { useState } from "react";
import { PageContainer } from "../components/PageContainer";

import gauchoImage from "../assets/images/gaucho.png";
import objectiveImage from "../assets/images/target.svg";

export const About = () => {
	const [viewMore, setViewMore] = useState(false);

	return (
		<PageContainer id="about">
			<section className="flex flex-col justify-items-center gap-y-10 pt-28 md:pt-20">
				<article className="grid grid-cols-1 md:grid-cols-3 justify-items-center md:gap-x-5 gap-y-10">
					<aside className="col-span-2 h-full">
						<h3 className="text-3xl font-bold my-2 px-4 py-2 text-white text-center">My story</h3>
						<p className="italic">
							I'm Fabricio Asat, from Argentina. Leaving aside my childhood, in my adolescence I
							started to be interested in programming, I wanted to know how programs worked and how
							I could create them, being that my start in programming.{" "}
							<button
								onClick={() => setViewMore(true)}
								className={`underline-offset-2 underline text-sky-400 font-semibold ${
									viewMore ? "hidden" : "inline-block"
								}`}
							>
								see more
							</button>
						</p>
						{viewMore && (
							<p className="italic">
								I went through many programming languages, like C - C++, Python, Java, Golang and
								finally about 1 year ago I started with JavaScript and I loved it, that's when I
								decided to get into web development. I opted to start with the Frontend using
								React.js and moved to the Backend in Node.js. I did small and complex projects, from
								a TODO to a real-time chat (which you can see in the{" "}
								<a href="#projects" className="text-sky-400 underline underline-offset-2">
									projects
								</a>{" "}
								section). Right now I'm looking for my first job opportunity to grow in the
								industry.
							</p>
						)}
					</aside>
					<img
						src={gauchoImage}
						alt="Gaucho"
						className="object-cover my-auto h-72 contrast-125 saturate-150"
					/>
				</article>

				<article className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-10">
					<aside className="flex flex-col gap-y-2 rounded-2xl">
						<h3 className="text-2xl font-bold px-4 text-orange-500 text-center">What do I like</h3>

						<ol className="list-disc marker:text-teal-400 pl-5">
							<li>
								I love programming in the evening, with a nice temperature, LOFI playing in the
								background and if you add 🧉 mates 🧉, it's the perfect night.
							</li>
							<li>
								I like to implement new functions in my programmes or create new projects using new
								technologies.
							</li>
							<li>I like to spend my weekends playing video games at night with my friends.</li>
							<li>I love animals, I have some very cute pets that I like to spoil.</li>
						</ol>
					</aside>

					<aside className="flex flex-col gap-y-2 rounded-2xl">
						<h3 className="text-2xl font-bold px-4 text-orange-500 text-center">How do I work</h3>

						<ol className="list-disc marker:text-teal-400 pl-5">
							<li>I start by thinking about what I'm going to do.</li>
							<li>
								Once it's done, I think about the design, do a quick sketch in my head or maybe on
								paper.
							</li>
							<li>I decide what technologies I'm going to use.</li>
							<li>I start coding. I put in the design, the style, the logic, etc.</li>
							<li>
								Once the prototype is done, I upload it and seek feedback from a third party (my
								brother).
							</li>
							<li>
								I update the small bugs, optimize the code, improve the styles, remove the junk code
								and publish it.
							</li>
						</ol>
					</aside>
				</article>

				<article className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-10 justify-items-center">
					<h3 className="md:hidden block text-2xl font-bold px-4 py-2 text-orange-500 text-center">
						Short and long term objectives
					</h3>
					<img
						src={objectiveImage}
						alt="Objectives"
						className="object-cover my-auto mx-auto h-72"
					/>
					<aside className="md:col-span-2 flex flex-col items-center rounded-2xl">
						<h3 className="hidden md:block text-2xl font-bold my-2 px-4 py-2 text-orange-500 text-center">
							Short and long term objectives
						</h3>
						<ol className="list-disc marker:text-teal-400 pl-5">
							<li>Getting my first full-stack job.</li>
							<li>
								Improve my knowledge of JavaScript, learn new tools and technologies present in the
								labour market.
							</li>
							<li>
								To broaden my knowledge of other programming languages and thus have a wider range
								of options in the future.
							</li>
							<li>
								To start developing leadership and team management skills in order to be able to
								lead different types of projects in the future.
							</li>
							<li>
								Working in renowned technology companies or, if I feel capable, launching my own
								startup.
							</li>
						</ol>
					</aside>
				</article>
			</section>
		</PageContainer>
	);
};
