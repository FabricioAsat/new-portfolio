import project1 from "../assets/projects/1_todo_updated.png";
import project2 from "../assets/projects/2_weather_app.png";
import project3 from "../assets/projects/3_poke_search.png";
import project4 from "../assets/projects/4_ecommerce.png";
import project5 from "../assets/projects/5_cute_dogs.png";
import project6 from "../assets/projects/6_searcher.png";
import project7 from "../assets/projects/7_encrypter.png";

export const dataProyects = [
	{
		title: "TODO - Updated",
		img: project1,
		info: "Update on my first project. It is made with TypeScript, it uses references, contexts, states, effects, quite strong logic, and more.",
		link: "https://1-todo-updated.vercel.app/",
	},

	{
		title: "Weather App",
		img: project2,
		info: "Second project in which fetch requests were made to a weather API. With this one I further refined the use of states, incorporated the creation of custom hooks and the incorporation of environment variables.",
		link: "https://p2-fabricio.netlify.app",
	},

	{
		title: "PokeSearch",
		img: project3,
		info: "Third project in which I continued making fetch requests to an API 'PokeAPI' and made a pokemon finder. The challenge here was the logic, how to receive information from each pokemon and work it. On the other hand, I incorporated the 'lazy loading' which is a tool that well used optimizes the application.",
		link: "https://p3-fabricio.netlify.app",
	},

	{
		title: "E-Commerce",
		img: project4,
		info: "Fourth project, a basic e-commerce made with NEXT.JS that uses an API to get the products and 'Tailwind' for the styles. At the same time, it incorporates the 'Dark/Light' mode through the hook 'useContext'. It was a very good project to improve the programming logic.",
		link: "https://4-ecommerce.vercel.app/",
	},

	{
		title: "Cute Dogs",
		img: project5,
		info: "Cute Dogs is an application for watching puppies. The main goal of it is to learn how to use Auth0, make a Login/Logout and work with different functionalities of the library, but not to present a pretty application to the user.",
		link: "https://5-cutedogs.vercel.app/",
	},

	{
		title: "Searcher + TS",
		img: project6,
		info: "Searcher is a simple application made to start adapting myself to TypeScript. It is the first and not the last application made in this language.",
		link: "https://6-searcher-ts.vercel.app/",
	},

	{
		title: "Encrypter & Pass generator",
		img: project7,
		info: "This project was made using React.js and Tailwind CSS plus dark mode styling. A Caesar cipher and a password generator were made. Here the challenge was to operate with different string methods and copy to clipboard functionality. Undoubtedly a project where I learned a lot.",
		link: "https://encrypt-and-pass-generator.vercel.app/",
	},
];
