import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// Custom component and styles
import Transaction from "../../components/transaction";
import IconLabelTabs from "../../components/navbar";
import applyCustomStyles from "./style";

export default function TransactionPage({ handleClick }) {
	// console.log(handleClick);
	const classes = applyCustomStyles();
	return (
		<Grid
			container
			direction="row"
			justify="center"
			alignItems="center"
			className={classes.root}
		>
			<Grid item xs={12}>
				<IconLabelTabs handleClick={handleClick} />
			</Grid>
			<Grid item xs={12}>
				<Typography
					variant="h3"
					gutterBottom
					className={classes.heading}
					align="center"
				>
					Transactions
				</Typography>
			</Grid>
			<Grid item xs={12} className={classes.card}>
				<Transaction />
			</Grid>
		</Grid>
	);
}
