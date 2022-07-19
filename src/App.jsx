import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Proyects from "./components/Proyects/Proyects";
import Pets from "./components/Pets/Pets";
import Error from "./components/Error/Error";

function App() {
	return (
		<Layout>
			<div className="pt-14 md:pt-16 xl:pt-20">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/proyects" element={<Proyects />} />
					<Route path="/pets" element={<Pets />} />
					<Route path="/*" element={<Error />} />
				</Routes>
			</div>
		</Layout>
	);
}

export default App;
