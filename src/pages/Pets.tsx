import { useState } from "react";
import { Link } from "react-router-dom";

import { dbPets } from "../database/dbPets";

export const Pets = () => {
	const [wantView, setWantView] = useState<boolean>(false);
	const [active, setActive] = useState<number>(0);

	function nextImage() {
		if (active === dbPets.length - 1) {
			setActive(0);
			return;
		}
		setActive(active + 1);
	}

	function prevImage() {
		if (active === 0) {
			setActive(dbPets.length - 1);
			return;
		}
		setActive(active - 1);
	}

	return (
		<article className="flex flex-col gap-y-8 animate-opacityAnimation h-full">
			<span className="flex flex-col items-center text-center mt-2 sm:mt-4 mb-6">
				<h1 className="longSize font-bold text-teal-500">I'll show them to you!</h1>
				<small className="shortSize italic mt-1">
					Let me tell you that you will experience a level of sweetness never seen before, are you
					sure you want to do it?
				</small>

				<nav
					className={`flex gap-x-6 w-full max-w-xs lowMediumSize mt-4 px-1 ${
						wantView ? "justify-center" : "justify-between"
					}`}
				>
					<Link
						to={"/about"}
						onClick={() => {
							setWantView(false);
						}}
						className={`text-blue-400 font-bold animate-scaleAnimation hover:text-blue-500 transition-colors duration-500`}
					>
						{wantView ? "⇚ Go back" : "No, I don't"}
					</Link>

					{!wantView && (
						<button
							onClick={() => {
								setWantView(true);
							}}
							className={`text-blue-400 font-bold animate-scaleAnimation hover:text-blue-500 transition-colors duration-500`}
						>
							Yes, I do
						</button>
					)}
				</nav>
			</span>
			{/* -------------------------------------------------------- */}
			<hr className={`w-2/3 mx-auto border-gray-500/75`} />{" "}
			{/* -------------------------------------------------------- */}
			{wantView && (
				<div className="relative w-full max-w-lg mx-auto">
					<nav className="relative flex justify-center gap-x-14 items-center z-40 w-full mb-2">
						<button
							className="font-bold bg-gray-500/20 text-orange-500 px-3 py-2 rounded-lg my-2 hover:bg-gray-500/50 transition-all duration-300"
							onClick={prevImage}
						>
							{"◀ "}Previous
						</button>
						<button
							className="font-bold bg-gray-500/20 text-orange-500 px-3 py-2 rounded-lg my-2 hover:bg-gray-500/50 transition-all duration-300"
							onClick={nextImage}
						>
							Next{" ▶"}
						</button>
					</nav>
					<picture className="flex items-stretch h-96">
						<Picture index={active} />
					</picture>
				</div>
			)}
			{/* -------------------------------------------------------- */}
			{wantView && <hr className={`w-full mx-auto border-gray-500/75`} />}
			{/* -------------------------------------------------------- */}
		</article>
	);
};

function Picture({ index }: { index: number }) {
	return (
		<>
			{dbPets.map(
				(pet, i) =>
					i === index && (
						<img
							src={pet.img}
							alt={pet.name}
							key={pet.id}
							className={
								"w-full max-h-96 h-full object-cover object-center animate-opacityAnimation rounded-3xl"
							}
						/>
					)
			)}
		</>
	);
}
