import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
// Custom component
import LoginPage from "./LoginPage";
import TransferPage from "./TransferPage";
import TransactionPage from "./TransactionPage";

function ShowedPage({ page, handleClick }) {
	switch (true) {
		case page === 1:
			return <LoginPage handleClick={handleClick} />;
		case page === 2:
			return <TransactionPage handleClick={handleClick} />;
		case page === 3:
			return <TransferPage handleClick={handleClick} />;
		default:
			return <LoginPage handleClick={handleClick} />;
	}
}

export default function App() {
	const [pageState, setPageState] = useState(2); //1:login , 2:transaction 3:transfer

	function handleClick(buttonId) {
		setPageState(buttonId);
	}

	return (
		<>
			<CssBaseline />
			<ShowedPage page={pageState} handleClick={handleClick} />
		</>
	);
}
