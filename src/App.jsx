import { Layout } from "./components/layout/Layout";
import { About } from "./pages/About";
import { Main } from "./pages/Main";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";

function App() {
	return (
		<Layout>
			<Main />
			<About />
			<Skills />
			<Projects />
		</Layout>
	);
}

export default App;
