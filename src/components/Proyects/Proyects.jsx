import proyectImage from "../../assets/proyect.svg";

import proyect1 from "../../assets/proyects/TODO.png";
import proyect2 from "../../assets/proyects/WeatherApp.png";
import proyect3 from "../../assets/proyects/PokeSearch.png";
import proyect4 from "../../assets/proyects/Ecommerce.png";
import proyect5 from "../../assets/proyects/CuteDogs.png";
import proyect6 from "../../assets/proyects/Searcher.png";

const proyectsData = [
	{
		title: "TODO",
		img: proyect1,
		info: `First project done with "useState" and the additional use of "useRef" for the creation of a TODO. It was a simple project where I learned and understood the operation and the way to work with states.`,
		link: "https://p1-fabricio.netlify.app",
	},
	{
		title: "Weather App",
		img: proyect2,
		info: `Second project in which fetch requests were made to a weather API. With this one I further refined the use of states, incorporated the creation of custom hooks and the incorporation of environment variables.`,
		link: "https://p2-fabricio.netlify.app",
	},
	{
		title: "PokeSearch",
		img: proyect3,
		info: `Third project in which I continued making fetch requests to an API ("PokeAPI") and made a pokemon finder. The challenge here was the logic, how to receive information from each pokemon and work it. On the other hand, I incorporated the "lazy loading" which is a tool that well used optimizes the application.`,
		link: "https://p3-fabricio.netlify.app",
	},
	{
		title: "E-Commerce",
		img: proyect4,
		info: `Fourth project, a basic e-commerce made with NEXT.JS that uses an API to get the products and "Tailwind" for the styles. At the same time, it incorporates the "Dark/Light" mode through the hook "useContext". It was a very good project to improve the programming logic.`,
		link: "https://4-ecommerce.vercel.app/",
	},
	{
		title: "Cute Dogs",
		img: proyect5,
		info: `Cute Dogs is an application for watching puppies. The main goal of it is to learn how to use Auth0, make a Login/Logout and work with different functionalities of the library, but not to present a pretty application to the user.`,
		link: "https://5-cutedogs.vercel.app/",
	},
	{
		title: "Searcher + TS",
		img: proyect6,
		info: `Searcher is a simple application made to start adapting myself to TypeScript. It is the first and not the last application made in this language.  `,
		link: "https://6-searcher-ts.vercel.app/",
	},
];

const Proyects = () => {
	return (
		<div className="flex flex-col gap-y-4 pt-6">
			<section className="inline-flex flex-col gap-y-4 sm:flex-row-reverse justify-evenly items-center px-4">
				<img src={proyectImage} alt="Proyect Image" className="w-full max-w-xs lg:max-w-sm" />

				<aside className="px-4 w-full flex flex-col items-center pt-2 md:gap-y-2 text-center">
					<h2 className="lowLongSize font-bold">
						About my <b className="text-sky-500 font-bold">proyects</b>
					</h2>
					<p className="lowShortSize italic">
						I would like to clarify beforehand that in the projects you will see I didn't try to
						give a nice design to the eye, I just focused on{" "}
						<b className="text-sky-500">perfecting</b> my React.JS skills (Hooks, Custom Hooks,
						Fetching, etc).{" "}
						<b>Remember, applications get better project by project, that's the beauty of it.</b>
					</p>
				</aside>
			</section>

			<section className="px-4 flex flex-col gap-y-6 pt-6">
				{proyectsData.map(({ img, title, info, link }, index) => (
					<ProyectComponent
						img={img}
						title={title}
						info={info}
						link={link}
						index={index}
						key={index}
					/>
				))}
			</section>
		</div>
	);
};

function ProyectComponent({ img, title, info, link, index }) {
	return (
		<article className="flex flex-col items-center px-4">
			<h2 className="mediumSize font-bold block lg:hidden">
				Proyect {index + 1} - <b className="text-sky-500 font-bold italic">{title}</b>
			</h2>

			<div className="flex flex-col lg:flex-row gap-y-2 gap-x-4">
				<picture className="w-full">
					<img src={img} alt={title} className="w-full max-w-md p-2 rounded-2xl mx-auto" />
				</picture>

				<span className="w-full max-w-3xl flex flex-col">
					<span>
						<h2 className="mediumSize lg:mediumSize font-bold hidden lg:block text-center">
							Proyect {index + 1} - <b className="text-sky-500 font-bold italic">{title}</b>
						</h2>
						<p className="lowShortSize italic">{info}</p>
					</span>

					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="py-1 px-2 ml-auto mt-4 lg:mt-auto block text-fondo my-3 bg-sky-500 rounded-full lowShortSize font-bold hover:scale-105 transition-transform duration-300 select-none">
						View project
					</a>
				</span>
			</div>
		</article>
	);
}

export default Proyects;
