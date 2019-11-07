import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// Custom component and styles
import Transfer from "../../components/transfer";

import applyCustomStyles from "./style";

export default function TransferPage() {
	const classes = applyCustomStyles();
	return (
		<>
			<Grid item xs={12}>
				<Typography
					variant="h3"
					gutterBottom
					className={classes.heading}
					align="center"
				>
					Transfer
				</Typography>
			</Grid>
			<Grid item xs={12} className={classes.card}>
				<Transfer />
			</Grid>
		</>
	);
}
