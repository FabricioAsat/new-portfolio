import { Link } from "react-router-dom";

import live from "../../assets/svg/liveAjo.svg";
import dead from "../../assets/svg/deadAjo.svg";
import { useState } from "react";

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
		<nav className="flex gap-x-2">
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
			<Link
				to={"/"}
				className="flex gap-x-3 items-center select-none h-16 hover:animate-scaleAnimation">
				<h2 className="lowBigSize md:longSize xl:lowLongSize italic font-bold text-blue-400">
					Portfolio
				</h2>
			</Link>

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
							className="text-blue-400 lowLongSize font-bold mb-4 animate-scaleAnimation">
							Close modal
						</button>
					</div>
				</div>
			)}
		</nav>
	);
};
