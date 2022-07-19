import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export const Footer = () => {
	return (
		<div className="flex flex-col justify-between gap-y-2 items-center bg-dark/90 text-fondo w-full pb-4 pt-3 mt-8">
			<h2 className="lowMediumSize font-bold">Contacts</h2>
			<nav className="flex gap-3 md:gap-5 xl:gap-8">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/fabricio-daniel-asat-780127237/"
					className="flex items-center gap-1 shortSize md:lowShortSize hover:text-sky-400 transition-colors duration-300">
					<BsLinkedin color="rgb(56 189 248)" />
					LinkedIn
				</a>

				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://github.com/FabricioAsat"
					className="flex items-center gap-1 shortSize md:lowShortSize hover:text-sky-400 transition-colors duration-300">
					<BsGithub color="rgb(56 189 248)" />
					Github
				</a>

				<Mailto email={"fabricioasat00@gmail.com"}>
					<SiGmail color="rgb(56 189 248)" />
					Gmail
				</Mailto>
			</nav>
		</div>
	);
};

const Mailto = ({ email, subject = "", body = "", children }) => {
	let params = subject || body ? "?" : "";
	if (subject) params += `subject=${encodeURIComponent(subject)}`;
	if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

	return (
		<a
			href={`mailto:${email}${params}`}
			className="flex items-center gap-1 shortSize md:lowShortSize hover:text-sky-400 transition-colors duration-300">
			{children}
		</a>
	);
};
