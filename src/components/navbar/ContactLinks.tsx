import githubImage from "../../assets/svg/github.svg";
import linkedinImage from "../../assets/svg/linkedin.svg";
import gmailImage from "../../assets/svg/gmail.svg";

export const ContactLinks = ({ className }: { className: string }) => {
	return (
		<nav className={`gap-x-5 lg:gap-x-8 animate-opacityAnimation select-none ${className}`}>
			<a
				href={import.meta.env.VITE_GITHUB_URL}
				rel="noopener noreferrer"
				target="_blank"
				className="hover:animate-scaleAnimation hover:brightness-125 transition-all duration-300 cursor-pointer">
				<img src={githubImage} alt="" className="w-7" />
			</a>
			<a
				href={import.meta.env.VITE_LINKEDIN_URL}
				rel="noopener noreferrer"
				target="_blank"
				className="hover:animate-scaleAnimation hover:brightness-125 transition-all duration-300 cursor-pointer">
				<img src={linkedinImage} alt="" className="w-7" />
			</a>

			<Mailto email={import.meta.env.VITE_MAIL} subject="" body="">
				<img src={gmailImage} alt="" className="w-7" />
			</Mailto>
		</nav>
	);
};

const Mailto = ({
	email,
	subject = "",
	body = "",
	children,
}: {
	email: string;
	subject: string;
	body: string;
	children: JSX.Element | JSX.Element[];
}) => {
	let params = subject || body ? "?" : "";
	if (subject) params += `subject=${encodeURIComponent(subject)}`;
	if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

	return (
		<a
			href={`mailto:${email}${params}`}
			className="hover:animate-scaleAnimation hover:brightness-125 transition-all duration-300 cursor-pointer">
			{children}
		</a>
	);
};
