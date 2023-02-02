import soft from "../assets/svg/skills/soft.svg";
import hard from "../assets/svg/skills/hard.svg";

export const Skills = () => {
	return (
		<article className="flex flex-col gap-y-5 px-4 animate-opacityAnimation mt-4 md:mt-8">
			<section className="flex flex-col items-center">
				<h2 className="lowLongSize font-bold text-center text-teal-500">Soft Skills</h2>
				<aside className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 gap-y-5 w-full justify-items-center items-start pt-2 md:py-4">
					<picture className="my-auto select-none">
						<img
							src={soft}
							alt=""
							className="w-1/2 sm:1/3 md:w-full lg:w-3/4 mx-auto
						"
						/>
					</picture>

					<span className="col-span-2 text-center w-full">
						<ol className="tinySize list-disc marker:text-orange-500 w-full text-start pl-4">
							<li>
								<b className="text-orange-500 italic">Responsible/Punctual: </b> A phrase I can
								relate to is: "I don't like to wait or keep people waiting".
							</li>

							<li>
								<b className="text-orange-500 italic">Empathy: </b>Putting yourself in the other
								person's shoes, knowing when someone needs help or realizing who is in trouble is a
								very important and necessary skill.
							</li>

							<li>
								<b className="text-orange-500 italic">Sincere/honest: </b>As a junior, honesty in
								acknowledging one's ignorance or asking for help when needed are vital points.
							</li>

							<li>
								<b className="text-orange-500 italic">Team player: </b>I consider that I am good at
								working professionally in teams, at least in college I am a good team player.
							</li>

							<li>
								<b className="text-orange-500 italic">Self-starter: </b>To progress in this industry
								requires this quality and I am no exception.
							</li>
						</ol>
					</span>
				</aside>
			</section>
			{/* -------------------------------------------------------- */}
			<hr className={`w-2/3 mx-auto border-gray-500/75`} />{" "}
			{/* -------------------------------------------------------- */}
			<section className="flex flex-col items-center">
				<h2 className="lowLongSize font-bold text-center text-teal-500">Hard Skills</h2>
				<aside className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 gap-y-5 w-full justify-items-center items-start pt-2 md:py-4">
					<picture className="my-auto select-none">
						<img src={hard} alt="" className="w-1/2 sm:1/3 md:w-full lg:w-3/4 mx-auto" />
					</picture>

					<span className="col-span-2 text-center w-full">
						<ol className="tinySize list-disc marker:text-orange-500 w-full text-start pl-4">
							<li>
								<b className="text-orange-500 italic">Layout: </b>A good knowledge of <b>HTML</b>.
								In turn, <b>React.JS</b> helps to reinforce it because of its great similarity when
								creating components.
							</li>
							<li>
								<b className="text-orange-500 italic">Styles: </b>I have a good command of{" "}
								<b>CSS</b>, although I still have to learn a lot more about it, I consider I have an
								intermediate knowledge. Also, in my projects I use <b>TailwindCSS</b> which is
								basically CSS in the form of classes.
							</li>
							<li>
								<b className="text-orange-500 italic">Code/Logic: </b>As for <b>JavaScript</b>, I
								feel pretty confident in this aspect, but I still have a lot to learn. On the other
								hand, college and my projects gave me more optimized logic. Also in a very basic way
								I understand <b>Node.JS</b> and <b>ExpressJS</b>, generate API Rest, do data saving
								in <b>MongoDB</b> and of course do queries using "<i>Mongoose</i>"
							</li>

							<li>
								<b className="text-orange-500 italic">Languages: </b>Native Spanish and intermediate
								English.
							</li>

							<li>
								<b className="text-orange-500 italic">Other programming languages: </b>Other
								languages I have a basic command of are <b>C - C++, Python, Java, Golang</b>. I
								would have no problem learning them more if I had to use them professionally.
							</li>
						</ol>
					</span>
				</aside>
			</section>
			{/* -------------------------------------------------------- */}
			<hr className={`w-full mx-auto border-gray-500/75`} />{" "}
			{/* -------------------------------------------------------- */}
		</article>
	);
};
