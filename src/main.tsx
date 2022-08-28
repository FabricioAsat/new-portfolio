import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkProvider } from "./context/darkContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<DarkProvider>
			<App />
		</DarkProvider>
	</React.StrictMode>
);
