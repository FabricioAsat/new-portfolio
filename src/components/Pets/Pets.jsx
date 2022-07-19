import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { FaSkull, FaArrowLeft } from "react-icons/fa";

import img1 from "../../assets/pets/1.jpg";
import img2 from "../../assets/pets/2.jpg";
import img3 from "../../assets/pets/3.jpg";
import img4 from "../../assets/pets/4.jpg";
import img5 from "../../assets/pets/5.jpg";
import img6 from "../../assets/pets/6.jpg";
import img7 from "../../assets/pets/7.jpg";
import img8 from "../../assets/pets/9.jpg";
import img9 from "../../assets/pets/10.jpg";
import img10 from "../../assets/pets/11.jpg";
import img11 from "../../assets/pets/12.jpg";
import img12 from "../../assets/pets/13.jpg";
import img13 from "../../assets/pets/14.jpg";
import img14 from "../../assets/pets/15.jpg";
import img15 from "../../assets/pets/16.jpg";
import img16 from "../../assets/pets/17.jpg";
import img18 from "../../assets/pets/19.jpg";
import img19 from "../../assets/pets/20.jpeg";

const imgArray = [
	img1,
	img2,
	img3,
	img4,
	img5,
	img6,
	img7,
	img8,
	img9,
	img10,
	img11,
	img12,
	img13,
	img14,
	img15,
	img16,
	img18,
	img19,
];

const Pets = () => {
	const [showPets, setShowPets] = useState(false);
	const [contador, setContador] = useState(0);

	function handleNextImage() {
		if (contador === imgArray.length - 1) {
			setContador(0);
		} else {
			setContador(contador + 1);
		}
	}

	function handlePrevImage() {
		if (contador === 0) {
			setContador(imgArray.length - 1);
		} else {
			setContador(contador - 1);
		}
	}

	return (
		<div className="flex flex-col justify-center items-center pt-4 gap-y-5 px-4">
			<h2 className="longSize font-bold">
				Yes, you <b className="text-sky-500 font-bold">wanted</b> to
			</h2>
			<p className="shortSize max-w-3xl italic font-semibold">
				Well, you have decided to die of tenderness. You can still take it back. I will give you two
				choices, go back and survive or go on and die. Your choice.
			</p>

			{!showPets ? (
				<div className="w-full max-w-sm flex justify-between">
					<Link
						to="/"
						className="flex justify-center items-center gap-1 py-1 px-2 mt-4 bg-dark/10 text-sky-500 my-3 rounded-full shortSize font-bold hover:scale-105 transition-transform duration-300 select-none">
						<FaArrowLeft />
						Survive
					</Link>
					<button
						className="flex justify-center items-center gap-1 py-1 px-2 mt-4 bg-dark/10 text-red-500 my-3 rounded-full shortSize font-bold hover:scale-105 transition-transform duration-300 select-none"
						onClick={() => setShowPets(true)}>
						<FaSkull />
						Dying of tenderness
					</button>
				</div>
			) : (
				<p className="mediumSize font-bold text-sky-500">He who warns does not betray</p>
			)}

			{showPets && (
				<div className="w-full max-w-3xl mx-auto">
					<img
						src={imgArray[contador]}
						alt="Pet"
						className="max-h-96 w-full object-contain mx-auto my-auto"
					/>
					<nav className="flex justify-center gap-x-24 my-auto max-w-2xl mx-auto mt-4">
						<button
							className="bg-black p-3 rounded-full text-fondo text-center border-2 border-fondo flex items-center justify-center"
							onClick={handlePrevImage}>
							<AiFillCaretLeft />
						</button>
						<button
							className="bg-black p-3 rounded-full text-fondo text-center border-2 border-fondo flex items-center justify-center"
							onClick={handleNextImage}>
							<AiFillCaretRight />
						</button>
					</nav>

					<p className="mt-10 mediumSize font-semibold">
						I hope you liked my babies, there are no more pictures to show you. You can go back to
						the{" "}
						<Link to="/" className="text-sky-500">
							main page
						</Link>
						.
					</p>
				</div>
			)}
		</div>
	);
};

export default Pets;
