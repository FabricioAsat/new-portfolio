import { NavLink } from "react-router-dom";
import { useState } from "react";

import live from "../../assets/svg/liveAjo.svg";
import dead from "../../assets/svg/deadAjo.svg";

export const Logo = () => {
	const [counter, setCounter] = useState(0);
	const [isAlive, setIsAlive] = useState(true);
	const [showModal, setShowModal] = useState(false);

	function handleCounter() {
		if (showModal) return;
		if (counter === 10) {
			setIsAlive(false), setShowModal(true);
		}
		setCounter(counter + 1);
	}

	return (
		<nav className="flex items-center gap-x-2 lowBigSize md:longSize xl:lowLongSize font-bold">
			{isAlive ? (
				<img
					src={live}
					alt=""
					onClick={handleCounter}
					className={`w-12 transition-transform duration-100 active:scale-y-75 active:scale-x-125 cursor-pointer select-none`}
				/>
			) : (
				<img src={dead} alt="" className={`w-12 cursor-not-allowed select-none`} />
			)}
			<NavLink
				to={"/"}
				className={({ isActive }) =>
					isActive ? "text-orange-500 italic" : "text-orange-500/90 hover:animate-scaleAnimation"
				}>
				Portfolio
			</NavLink>

			{showModal && (
				<div className="fixed flex items-center justify-center z-50 top-0 left-0 w-full h-full bg-black/75 animate-opacityAnimation px-4">
					<div className="relative flex flex-col bg-lightLight w-full max-w-lg h-auto rounded-3xl border-4 border-gray-400/50">
						<h2 className="text-red-500 font-bold text-center longSize xl:lowLongSize mt-4">
							Your curiosity killed me
						</h2>

						<small className="text-center shortSize italic font-semibold text-darkDark">
							I hope you are happy now
						</small>

						<img src={dead} alt="" className={`w-full max-w-xs mx-auto select-none`} />

						<button
							onClick={() => {
								setShowModal(false);
							}}
							className="text-orange-500 lowLongSize font-bold mb-4">
							Close modal
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};
