import githublogo from "../assets/SVG/github_logo.svg";
import linkedinlogo from "../assets/SVG/linkedin_logo.svg";
import gmaillogo from "../assets/SVG/mail_logo.svg";

export function ContactLinks({ className }) {
	return (
		<nav className={className}>
			<a
				href={import.meta.env.VITE_GITHUB_URL}
				rel="noopener noreferrer"
				target="_blank"
				className="hover:brightness-75"
			>
				<img
					src={githublogo}
					alt="Github"
					className="w-9 hover:brightness-75 transition-all duration-300 cursor-pointer"
				/>
			</a>
			<a
				href={import.meta.env.VITE_LINKEDIN_URL}
				rel="noopener noreferrer"
				target="_blank"
				className="hover:brightness-75"
			>
				<img
					src={linkedinlogo}
					alt="Github"
					className="w-8 hover:brightness-75 transition-all duration-300 cursor-pointer"
				/>
			</a>
			<a href={"mailto:" + import.meta.env.VITE_MAIL} className="hover:brightness-75">
				<img
					src={gmaillogo}
					alt="Github"
					className="w-9 hover:brightness-75 transition-all duration-300 cursor-pointer"
				/>
			</a>
		</nav>
	);
}
