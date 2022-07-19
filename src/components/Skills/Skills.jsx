// Images
import personalInfo from "../../assets/personal-info.svg";
import porcentages from "../../assets/porcentages.svg";

// Icons
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiReact } from "react-icons/si";

const Skills = () => {
	return (
		<div className="px-4 w-full flex flex-col items-center pt-4 gap-y-4">
			<h2 className="longSize font-bold">
				About my <b className="text-sky-500 font-bold">skills</b>
			</h2>

			{/* Soft-skills */}
			<article className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-y-4 gap-x-4 lg:pb-4 w-full">
				<picture className="flex flex-col items-center justify-center max-w-md lg:max-w-xs w-full my-auto">
					<h3 className="font-semibold lowLongSize block lg:hidden">Soft Skills</h3>
					<img
						src={personalInfo}
						alt="Personal Info"
						className="w-full max-w-md lg:max-w-sm lg:-rotate-12"
					/>
				</picture>

				<aside className="w-full flex flex-col items-center md:items-start">
					<h3 className="font-semibold lowLongSize xl:mediumSize hidden lg:block mx-auto">
						Soft Skills
					</h3>
					<ol>
						<li>
							<small className="tinySize italic">
								<b className="text-sky-500">Responsible/Punctual: </b>A good phrase is: "I don't
								like to keep people waiting, and I don't like to be kept waiting".
							</small>
						</li>

						<li>
							<small className="tinySize italic">
								<b className="text-sky-500">Empathetic: </b>Putting yourself in the other person's
								shoes, knowing when someone needs help or realizing who is in trouble is a very
								important and necessary skill.
							</small>
						</li>

						<li>
							<small className="tinySize italic">
								<b className="text-sky-500">Sincere/Honest: </b>As a subordinate, the sincerity to
								recognize one's own ignorance or to ask for help when necessary are vital points.
							</small>
						</li>

						<li>
							<small className="tinySize italic">
								<b className="text-sky-500">Group Worker: </b>Considero que soy bueno para trabajar
								profesionalmente en grupo, sólo necesito la oportunidad de demostrarlo.
							</small>
						</li>

						<li>
							<small className="tinySize italic">
								<b className="text-sky-500">Self-taught: </b>To progress in this industry you must
								be self-taught.
							</small>
						</li>
					</ol>
				</aside>
			</article>

			{/* Hard-skills */}
			<article className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-between gap-y-4 lg:pt-4 gap-x-4 w-full">
				<picture className="flex flex-col items-center justify-center max-w-md lg:max-w-xs w-full my-auto">
					<h3 className="font-semibold lowLongSize block lg:hidden">Hard Skills</h3>
					<img src={porcentages} alt="Hard Skills" className="w-full max-w-md lg:max-w-sm" />
				</picture>

				<aside className="w-full flex flex-col gap-2 items-center md:items-start">
					<h3 className="font-semibold lowLongSize xl:mediumSize hidden lg:block mx-auto">
						Hard Skills
					</h3>

					<ol className="flex flex-col gap-y-4 w-full">
						<li>
							<div className="flex justify-center items-center gap-1 shortSize text-[#FF5733]">
								<FaHtml5 />
								<b className="font-bold">HTML5</b>
							</div>
							<small className="tinySize italic">
								A good knowledge of HTML. In turn, React.JS helps to reinforce it because of its
								great similarity when creating components.
							</small>
						</li>

						<li>
							<div className="shortSize flex gap-8 items-center justify-center">
								<span className="flex justify-center items-center gap-1 text-[#2965f1]">
									<FaCss3 />
									<b className="font-bold">CSS3</b>
								</span>

								<span className="flex justify-center items-center gap-1 text-[#38bdf8]">
									<SiTailwindcss />
									<b className="font-bold">Tailwind</b>
								</span>
							</div>
							<small className="tinySize italic">
								I have a good command of CSS, although I still have to learn a lot more about it, I
								consider that I have an intermediate knowledge. Also, in my projects I use Tailwind
								CSS which is CSS in the form of classes and allows me not to forget how to use it.
							</small>
						</li>

						<li>
							<div className="shortSize flex gap-8 items-center justify-center">
								<span className="flex justify-center items-center gap-1 text-[#facc15]">
									<SiJavascript />
									<b className="font-bold">JavaScript</b>
								</span>

								<span className="flex justify-center items-center gap-1 text-[#61DBFB]">
									<SiReact />
									<b className="font-bold">React</b>
								</span>
							</div>
							<small className="tinySize italic">
								As for JavaScript, I consider that I have a good knowledge of it although I still
								have a lot of room for improvement. As for programming logic, the university gave me
								a very solid foundation and React.JS reinforced it.
							</small>
						</li>
					</ol>
				</aside>
			</article>
		</div>
	);
};

export default Skills;
