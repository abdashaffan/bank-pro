import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// Custom component
import IconLabelTabs from "../components/navbar";
import LoginPage from "./LoginPage";
import TransferPage from "./TransferPage";
import TransactionPage from "./TransactionPage";

const applyCustomStyles = makeStyles(theme => ({
	rootHome: {
		backgroundColor: "#4caf50",
		minHeight: "100vh"
	},
	rootLogin: {
		backgroundColor: "#0288d1",
		minHeight: "100vh"
	}
}));

function ShowedPage({ page, handleLogin }) {
	switch (true) {
		case page === 1:
			return <LoginPage handleLogin={handleLogin} />;
		case page === 2:
			return <TransactionPage />;
		case page === 3:
			return <TransferPage />;
		default:
			return <LoginPage />;
	}
}

export default function App() {
	const [pageState, setPageState] = useState(1); //1:login , 2:transaction 3:transfer
	const classes = applyCustomStyles();

	function handleClick(buttonId) {
		setPageState(buttonId);
	}
	function handleLogin() {
		setPageState(2);
	}

	return (
		<>
			<CssBaseline />
			{pageState !== 1 ? (
				<Grid
					container
					direction="column"
					justify="flex-start"
					alignItems="center"
					className={classes.rootHome}
				>
					<Grid item xs={12}>
						<IconLabelTabs handleClick={handleClick} />
					</Grid>
					<Grid item xs={12}>
						<ShowedPage page={pageState} handleLogin={handleLogin} />
					</Grid>
				</Grid>
			) : (
				<Grid
					container
					direction="row"
					justify="center"
					alignItems="center"
					className={classes.rootLogin}
				>
					<Grid item xs={12}>
						<ShowedPage page={pageState} handleLogin={handleLogin} />
					</Grid>
				</Grid>
			)}
		</>
	);
}
