import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

const useStyles = makeStyles(theme => ({
	"@global": {
		root: {
			backgroundColor: theme.palette.common.white,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			width: "100vw",
			height: "100vh"
		}
	},
	paper: {
		marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#fafafa",
		borderRadius: "6px",
		padding: "4em 3em",
		border: "1px solid rgba(32,33,36,0.28)",
		boxShadow: "0 4px 4px 0 rgba(32,33,36,0.28)"
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

export default function Transfer() {
	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
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
							Transfer
						</Button>
					</form>
				</div>
			</ThemeProvider>
		</Container>
	);
}
