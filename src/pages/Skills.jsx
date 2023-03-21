import { PageContainer } from "../components/PageContainer";

import skillsImage from "../assets/images/skills.svg";

export const Skills = () => {
	return (
		<PageContainer id="skills">
			<picture className="flex items-center justify-center pt-28 md:pt-20 pb-5">
				<img src={skillsImage} alt="Skills" className="object-cover my-auto mx-auto h-72 w-full" />
			</picture>

			<article className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-x-5 gap-y-10 border-y-2 border-x border-bgDark bg-black/60 rounded-3xl">
				<aside className="w-full px-5 pb-7 pt-5 rounded-2xl max-w-xl">
					<h3 className="text-2xl font-bold text-orange-500 text-center pb-5">Soft-Skills</h3>

					<div className="flex flex-col gap-y-2 font-semibold">
						<p>
							<b className="text-teal-500 italic font-extrabold">Teamwork:</b> The ability to work
							well in a team is vital to achieve common goals in a company.
						</p>

						<p>
							<b className="text-teal-500 italic font-extrabold">Empathy / Respect:</b> The ability
							to put yourself in other people's shoes, to understand and respect their points of
							view is very important, which is conducive to a good working environment.
						</p>

						<p>
							<b className="text-teal-500 italic font-extrabold">Adaptability:</b> The ability to
							adapt to changing situations and make decisions accordingly is important in a business
							environment.
						</p>

						<p>
							<b className="text-teal-500 italic font-extrabold">Teamwork:</b> The ability to adapt
							to changing situations and make decisions accordingly is important in a business
							environment.
						</p>
					</div>
				</aside>

				<hr className="lg:hidden border border-neutral-800 w-5/6 mx-auto" />

				<aside className="w-full p-5 rounded-2xl max-w-xl">
					<h3 className="text-2xl font-bold text-orange-500 text-center pb-5">Hard-Skills</h3>

					<ol className="list-disc pl-5 marker:text-teal-500 flex flex-col gap-y-2 font-semibold">
						<li>Handling of version control tools such as Git.</li>

						<li>Frontend with HTML, CSS, Tailwind CSS and JavaScript.</li>

						<li>Web applications with ReactJS and component management.</li>

						<li>Node.js for backend application development and API management.</li>

						<li>Familiarity with NoSQL databases (MongoDB)</li>

						<li>Solid knowledge of programming logic and algorithms.</li>

						<li>Basic programming knowledge in languages such as C, C++, Java, Go and Python.</li>

						<li>Basic knowledge of web design</li>
					</ol>
				</aside>
			</article>
		</PageContainer>
	);
};
