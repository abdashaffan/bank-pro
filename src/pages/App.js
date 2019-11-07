import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
// Custom component
import LoginPage from "./LoginPage";
import TransferPage from "./TransferPage";

function ShowedPage({ page }) {
	switch (true) {
		case page === "login":
			return <LoginPage />;
		case page === "history":
			return ""; //TODO : Isi sama komponen history
		case page === "transfer":
			return <TransferPage />;
		default:
			return <LoginPage />;
	}
}

export default function App() {
	const [pageState, setPageState] = useState("transfer"); //login , history, atau transfer

	return (
		<>
			<CssBaseline />
			<ShowedPage page={pageState} />
		</>
	);
}
