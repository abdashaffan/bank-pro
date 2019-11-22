import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(1),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#fafafa",
		borderRadius: "6px",
		padding: "2em 2em",
		border: "1px solid rgba(32,33,36,0.28)",
		boxShadow: theme.shadows[12]
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: "#4caf50"
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		color: theme.palette.common.white
	}
}));

const theme = createMuiTheme({
	palette: {
		primary: green
	}
});

export default function Transfer({currAccNum}) {
	const classes = useStyles();
	const [toAccount,setToAccount] = React.useState();
	const [nominal, setNominal] = React.useState();

	return (
		<Container component="main" maxWidth="xs">
			<ThemeProvider theme={theme}>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<AttachMoneyOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Transfer
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Account Number"
							name="account-number"
							autoComplete="account-number"
							autoFocus
						/>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="Transfer Amount"
							label="Amount"
							type="amount"
							id="amount"
							autoComplete="transfer-amount"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Send
						</Button>
					</form>
				</div>
			</ThemeProvider>
		</Container>
	);
}
