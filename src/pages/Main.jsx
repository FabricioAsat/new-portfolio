import { ContactLinks } from "../components/ContactLinks";
import { PageContainer } from "../components/PageContainer";

import meImage from "../assets/images/me.png";

import whoIAm from "../assets/SVG/whoIAm.svg";
import howIAm from "../assets/SVG/howIAm.svg";
import whyMe from "../assets/SVG/whyMe.svg";

import reactLogo from "../assets/SVG/react_logo.svg";
import nodeLogo from "../assets/SVG/node_logo.svg";

export const Main = () => {
	return (
		<PageContainer id="home" principal={true}>
			{/* Me */}
			<article className="grid grid-cols-1 md:grid-cols-3 justify-items-center items-center w-full max-w-5xl mx-auto gap-x-2 py-5 md:pb-32 md:pt-20">
				<picture className="bg-gradient-to-t from-purple-700/25 to-sky-700/10 rounded-full">
					<img
						src={meImage}
						alt="Me"
						className="saturate-[1.1] contrast-[1.1] h-full max-h-72 border-b-4 border-purple-700/5 rounded-b-full"
					/>
				</picture>

				<span className="flex flex-col items-center md:col-span-2">
					<h1 className="text-3xl md:text-4xl text-center font-extrabold pt-8 text-[#eee] py-2">
						Hello to you, I'm Fabricio
					</h1>
					<small className="italic text-lg md:text-xl font-semibold text-orange-500 pb-5">
						Jr. Frontend Developer
					</small>
					<ContactLinks className={"flex gap-x-5 items-center justify-center my-3 mx-5"} />
				</span>
			</article>

			{/* Who, how & why */}
			<article>
				<section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-x-5 gap-y-10 text-center">
					<aside className="flex flex-col gap-y-5 items-start justify-start px-3 pt-5 pb-5 w-full max-w-md rounded-2xl  border-y-2 border-x border-bgDark bg-black/60">
						<picture className="flex items-center gap-x-4">
							<img src={whoIAm} alt="Who i am" className="w-12 h-12" />
							<h4 className="text-2xl font-extrabold text-orange-500">Who am I?</h4>
						</picture>
						<p className="italic text-white font-semibold">
							I'm a 22 years old argentinian oriented to web development both front-end (React.js)
							and back-end (Node.js). I'm a student of Systems Engineering since 3 years ago, so
							far, all my knowledge has been self-taught.
						</p>

						<aside className="flex items-center justify-end gap-x-4 w-full mt-auto border-t-2 pt-5 border-neutral-800">
							<a
								href="https://es.reactjs.org/"
								rel="noopener noreferrer"
								target="_blank"
								className="flex items-center gap-x-1 px-2 py-1 bg-bgDark rounded-xl hover:text-[#61dafb] duration-300"
							>
								<img src={reactLogo} alt="" className="w-6" />
								<p className="text-sm">React.js</p>
							</a>

							<a
								href="https://nodejs.org/en"
								rel="noopener noreferrer"
								target="_blank"
								className="flex items-center gap-x-1 px-2 py-1 bg-bgDark rounded-xl hover:text-[#83cd29] duration-300"
							>
								<img src={nodeLogo} alt="" className="w-6" />
								<p className="text-sm">Node.js</p>
							</a>
						</aside>
					</aside>

					<aside className="flex flex-col gap-y-5 items-start justify-start px-3 pt-5 pb-5 w-full max-w-md rounded-2xl  border-y-2 border-x border-bgDark bg-black/60">
						<picture className="flex items-center gap-x-4">
							<img src={howIAm} alt="Who i am" className="w-12 h-12" />
							<h4 className="text-2xl font-extrabold text-orange-500">How am I?</h4>
						</picture>
						<p className="italic text-white font-semibold">
							As a self-taught person, I am excited to start my career in the working world and to
							be able to apply my knowledge to real projects. I am looking for the opportunity to
							work with and learn from other talents and to share my own knowledge with others. I am
							looking for a position that will allow me to further hone my skills and allow me to
							grow as a person.
						</p>
					</aside>

					<aside className="md:col-span-2 xl:col-span-1 flex flex-col gap-y-5 items-start justify-start px-3 pt-5 pb-5 w-full max-w-md rounded-2xl  border-y-2 border-x border-bgDark bg-black/60">
						<picture className="flex items-center gap-x-4">
							<img src={whyMe} alt="Who i am" className="w-12 h-12" />
							<h4 className="text-2xl font-extrabold text-orange-500">Why me?</h4>
						</picture>
						<p className="italic text-white font-semibold">
							As a young man with a passion for programming, I have been investing my time in
							improving my JavaScript skills over the past year. I have had the opportunity to
							complete several challenging projects that have allowed me to polish my mastery of the
							language. In particular, I have been able to solve problems of great complexity and
							design in my projects, which has taught me to be more logical and creative.
						</p>
					</aside>
				</section>
			</article>

			{/* Qué espero lograr */}
		</PageContainer>
	);
};
