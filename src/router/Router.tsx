import { HashRouter, Route, Routes } from "react-router-dom";

// ! Components
import { Layout } from "../components/layout/Layout";
import { About } from "../pages/About";
import { Error } from "../pages/Error";
import { Main } from "../pages/Main";
import { Pets } from "../pages/Pets";
import { Projects } from "../pages/Projects";
import { Skills } from "../pages/Skills";

export default function Router() {
	return (
		<HashRouter>
			<Layout>
				<Routes>
					<Route path={"/"} element={<Main />} />
					<Route path={"/about"} element={<About />} />
					<Route path={"/skills"} element={<Skills />} />
					<Route path={"/projects"} element={<Projects />} />
					<Route path={"/pets"} element={<Pets />} />
					<Route path={"/*"} element={<Error />} />
				</Routes>
			</Layout>
		</HashRouter>
	);
}
