import { PageContainer } from "../components/PageContainer";

import { dataProyects } from "../db/dbProyects";

import deployLogo from "../assets/SVG/deploy_logo.svg";
import githubLogo from "../assets/SVG/github_logo.svg";
import { useState } from "react";

export const Projects = () => {
	const [viewAllProjects, setViewAllProjects] = useState(false);

	return (
		<PageContainer id="projects">
			<div className=" pt-28 md:pt-20 pb-16">
				<h2 className="text-3xl font-bold text-center py-2 text-white">My latest projects</h2>
				<p className="text-sm max-w-3xl text-center mx-auto">
					These implement improved logic, better design, better optimisation, new tools and so on.
					The reason is that as I release new projects, they improve or try to outdo the previous
					one in one way or another.{" "}
				</p>
			</div>

			<article className="flex flex-wrap items-center justify-center gap-5 pb-10">
				{dataProyects
					.slice(0, viewAllProjects ? dataProyects.length - 1 : 3)
					.map((project, index) => (
						<div
							key={index}
							className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-4 gap-y-3 justify-items-center py-5 px-5 rounded-2xl max-w-3xl border-y-2 border-x border-bgDark bg-black/60"
						>
							<picture className="flex flex-col items-center justify-center gap-y-1 select-none">
								<small className="italic font-bold">{project.date.toLocaleDateString()}</small>
								<img
									src={project.img}
									alt={project.title}
									className="w-3/4 max-w-xs sm:w-full sm:max-w-md mx-auto rounded-xl border border-bgDark/50"
								/>
							</picture>

							<aside className="flex flex-col justify-between h-full col-span-2 max-w-xs sm:max-w-full">
								<span>
									<h1 className="text-orange-500 font-extrabold text-center text-2xl pb-2">
										{project.title}
									</h1>
									<p className="font-semibold text-sm text-center sm:text-start italic">
										{project.info}
									</p>
								</span>

								<nav className="flex items-center gap-x-6 justify-center sm:justify-end mt-4 select-none">
									<a
										href={project.linkGithub}
										rel="noopener noreferrer"
										target="_blank"
										className="hover:scale-110 transition-transform duration-200"
									>
										<img src={githubLogo} alt="Github" className="w-8" />
									</a>

									<a
										href={project.linkDemo}
										rel="noopener noreferrer"
										target="_blank"
										className={"hover:scale-110 transition-transform duration-200"}
									>
										<img src={deployLogo} alt="Deploy" className="w-7" />
									</a>
								</nav>
							</aside>
						</div>
					))}
			</article>

			<aside className="max-w-4xl mx-auto">
				<button
					onClick={() => setViewAllProjects(!viewAllProjects)}
					className="font-bold bg-bgDark px-4 py-2 rounded-md hover:text-teal-500"
				>
					{viewAllProjects ? "Hide projects" : "View all projects"}
				</button>
			</aside>
		</PageContainer>
	);
};
