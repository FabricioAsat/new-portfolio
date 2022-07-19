import { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenu, CgClose } from "react-icons/cg";

const LinksContainer = () => {
	const [modalLinks, setModalLinks] = useState(false);

	return (
		<nav className="flex md:w-full">
			<Mobile modalLinks={modalLinks} setModalLinks={setModalLinks} />
			<Desktop setModalLinks={setModalLinks} />
		</nav>
	);
};

function Mobile({ modalLinks, setModalLinks }) {
	return (
		<div className="block md:hidden">
			<button className="text-center h-full" onClick={() => setModalLinks(!modalLinks)}>
				{modalLinks ? <CgClose size="40px" /> : <CgMenu size="40px" />}
			</button>

			<nav
				className={`fixed z-40 top-14 right-0 flex flex-col justify-start items-center w-full h-full pt-4 bg-fondo/90 transition-all duration-500 ${
					modalLinks ? "translate-x-0" : "translate-x-full"
				}`}>
				<Links modalLinks={modalLinks} setModalLinks={setModalLinks} />
			</nav>
		</div>
	);
}

function Desktop() {
	return (
		<div className="hidden md:block mx-auto">
			<nav className={`flex gap-x-4 justify-start items-center mx-auto`}>
				<Links />
			</nav>
		</div>
	);
}

function Links({ setModalLinks = () => {} }) {
	return (
		<>
			<NavLink
				onClick={() => setModalLinks(false)}
				to="/"
				className={({ isActive }) =>
					isActive
						? "text-sky-500 mediumSize xl:lowMediumSize font-bold"
						: "mediumSize xl:lowMediumSize font-bold"
				}>
				Home
			</NavLink>

			<NavLink
				onClick={() => setModalLinks(false)}
				to="/skills"
				className={({ isActive }) =>
					isActive
						? "text-sky-500 mediumSize xl:lowMediumSize font-bold"
						: "mediumSize xl:lowMediumSize font-bold"
				}>
				Skills
			</NavLink>

			<NavLink
				onClick={() => setModalLinks(false)}
				to="/proyects"
				className={({ isActive }) =>
					isActive
						? "text-sky-500 mediumSize xl:lowMediumSize font-bold"
						: "mediumSize xl:lowMediumSize font-bold"
				}>
				Proyects
			</NavLink>
		</>
	);
}

export default LinksContainer;
