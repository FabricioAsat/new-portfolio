import project1 from "../assets/projects/1-todo-updated.webp";
import project2 from "../assets/projects/2-weather-app.webp";
import project3 from "../assets/projects/3-pokesearch-updated.webp";
import project4 from "../assets/projects/4-ecommerce.webp";
import project5 from "../assets/projects/5-cute-dogs.webp";
import project6 from "../assets/projects/6-searcher.webp";
import project7 from "../assets/projects/7-encrypter.webp";
import project8 from "../assets/projects/8-chatapp.webp";
import project9 from "../assets/projects/9-tecro.webp";

export const dataProyects = [
	{
		title: "TODO - Updated",
		img: project1,
		info: "Update on my first project. It is made with TypeScript, it uses references, contexts, states, effects, quite strong logic, and more.",
		linkDemo: "https://1-todo-updated.vercel.app/",
		linkGithub: "https://github.com/FabricioAsat/1_todo_updated",
		date: new Date(2022, 7, 24),
	},

	{
		title: "Weather App",
		img: project2,
		info: "Second project in which fetch requests were made to a weather API. With this one I further refined the use of states, incorporated the creation of custom hooks and the incorporation of environment variables.",
		linkDemo: "https://p2-fabricio.netlify.app",
		linkGithub: "https://github.com/FabricioAsat/2_weather",
		date: new Date(2022, 6, 5),
	},

	{
		title: "PokeSearch - Updated",
		img: project3,
		info: `Update of my third project "PokeSearch", in which I applied the new design style, dark/light mode, better use of fetching, etc. Of course, all done with TypeScript.`,
		linkDemo: "https://9-pokesearch-updated.vercel.app/",
		linkGithub: "https://github.com/FabricioAsat/9_pokesearch_updated",
		date: new Date(2022, 7, 31),
	},

	{
		title: "E-Commerce",
		img: project4,
		info: "Fourth project, a basic e-commerce made with NEXT.JS that uses an API to get the products and 'Tailwind' for the styles. At the same time, it incorporates the 'Dark/Light' mode through the hook 'useContext'. It was a very good project to improve the programming logic.",
		linkDemo: "https://4-ecommerce.vercel.app/",
		linkGithub: "https://github.com/FabricioAsat/4_ecommerce",
		date: new Date(2022, 6, 15),
	},

	{
		title: "Cute Dogs",
		img: project5,
		info: "Cute Dogs is an application for watching puppies. The main goal of it is to learn how to use Auth0, make a Login/Logout and work with different functionalities of the library, but not to present a pretty application to the user.",
		linkDemo: "https://5-cutedogs.vercel.app/",
		linkGithub: "https://github.com/FabricioAsat/5_cutedogs",
		date: new Date(2022, 6, 29),
	},

	{
		title: "Searcher + TS",
		img: project6,
		info: "Searcher is a simple application made to start adapting myself to TypeScript. It is the first and not the last application made in this language.",
		linkDemo: "https://6-searcher-ts.vercel.app/",
		linkGithub: "https://github.com/FabricioAsat/6_searcher_ts",
		date: new Date(2022, 7, 11),
	},

	{
		title: "Encrypter & Pass generator",
		img: project7,
		info: "This project was made using React.js and Tailwind CSS plus dark mode styling. A Caesar cipher and a password generator were made. Here the challenge was to operate with different string methods and copy to clipboard functionality. Undoubtedly a project where I learned a lot.",
		linkDemo: "https://encrypt-and-pass-generator.vercel.app/",
		linkGithub: "https://github.com/FabricioAsat/encrypt-pass-generator",
		date: new Date(2022, 7, 22),
	},
	{
		title: "Realtime Chat App",
		img: project8,
		info: "Real-time chat application, first full-stack application in which I use the MERN stack. No deployment, but the code is on GitHub in case you are interested.",
		linkDemo: "https://www.linkedin.com/feed/update/urn:li:activity:6992998995291705344/",
		linkGithub: "https://github.com/FabricioAsat/10_real_time_chat",
		date: new Date(2022, 10, 1),
	},
	{
		title: "Tecro v1.0",
		img: project9,
		info: "TECRO's website made and designed 100% by me. I will see if I add more features in the future.",
		linkDemo: "https://tecro-git-main-fabricioasat.vercel.app/",
		linkGithub: "https://github.com/FabricioAsat/Tecro",
		date: new Date(2023, 1, 13),
	},
].sort((dateA, dateB) => dateB.date - dateA.date);
