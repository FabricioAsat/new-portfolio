import soft from "../assets/svg/skills/soft.svg";
import hard from "../assets/svg/skills/hard.svg";

export const Skills = () => {
	return (
		<article className="flex flex-col gap-y-5 px-4 animate-opacityAnimation mt-4 md:mt-8">
			<section className="flex flex-col items-center">
				<h2 className="lowLongSize font-bold text-center text-orange-500">Soft Skills</h2>
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
						<p className="italic lowMediumSize mb-4 font-semibold">
							<small>Things that stand out from my soft skills.</small>
						</p>
						<ol className="tinySize italic list-disc marker:text-orange-500 w-full text-start pl-4">
							<li>
								<b className="text-orange-500">Responsible/Punctual: </b> A phrase I can relate to
								is: "I don't like to wait or keep people waiting".
							</li>

							<li>
								<b className="text-orange-500">Empathy: </b>Putting yourself in the other person's
								shoes, knowing when someone needs help or realizing who is in trouble is a very
								important and necessary skill.
							</li>

							<li>
								<b className="text-orange-500">Sincere/honest: </b>As a junior, honesty in
								acknowledging one's ignorance or asking for help when needed are vital points.
							</li>

							<li>
								<b className="text-orange-500">Team player: </b>I consider that I am good at working
								professionally in teams, at least in college I am a good team player.
							</li>

							<li>
								<b className="text-orange-500">Self-starter: </b>To progress in this industry
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
				<h2 className="lowLongSize font-bold text-center text-orange-500">Hard Skills</h2>
				<aside className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4 gap-y-5 w-full justify-items-center items-start pt-2 md:py-4">
					<picture className="my-auto select-none">
						<img src={hard} alt="" className="w-1/2 sm:1/3 md:w-full lg:w-3/4 mx-auto" />
					</picture>

					<span className="col-span-2 text-center w-full">
						<p className="italic lowMediumSize mb-4 font-semibold">
							<small>Things that stand out from my hard skills</small>
						</p>
						<ol className="tinySize italic list-disc marker:text-orange-500 w-full text-start pl-4">
							<li>
								<b className="text-orange-500">Layout: </b>A good knowledge of HTML. In turn,
								React.JS helps to reinforce it because of its great similarity when creating
								components.
							</li>
							<li>
								<b className="text-orange-500">Styles: </b>I have a good command of CSS, although I
								still have to learn a lot more about it, I consider I have an intermediate
								knowledge. Also, in my projects I use Tailwind CSS which is basically CSS in the
								form of classes.
							</li>
							<li>
								<b className="text-orange-500">Code/Logic: </b>As for JavaScript, I feel pretty
								confident in this aspect, but I still have a lot to learn. On the other hand,
								college and my projects gave me more optimized logic. Also in a very basic way I
								understand Node.js and Express, generate API Rest, do data saving in MongoDB and of
								course do queries using "Mongoose"
							</li>

							<li>
								<b className="text-orange-500">Languages: </b>Native Spanish and intermediate
								English.
							</li>

							<li>
								<b className="text-orange-500">Other programming languages: </b>Other languages I
								have a basic command of are C - C++, Python, Java, Golang. I would have no problem
								learning them more if I had to use them professionally.
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
