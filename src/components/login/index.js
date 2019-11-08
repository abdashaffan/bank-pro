import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import {
	makeStyles,
	ThemeProvider,
	createMuiTheme
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const loginColorTheme = createMuiTheme({
	palette: {
		primary: {
			main: "#0288d1"
		},
		common: {
			black: "#333",
			white: "#fafafa"
		}
	},
	typography: {
		fontFamily: "'Lato', sans-serif"
	}
});

const useStyles = makeStyles(theme => ({
	paper: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#fafafa",
		borderRadius: "15px",
		padding: "4em 3em",
		border: "1px solid rgba(32,33,36,0.28)",
		boxShadow: theme.shadows[12]
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: "#0288d1"
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		color: theme.palette.common.white
	},
	title: {
		color: "#333",
		textAlign: "center"
	}
}));

export default function Login({ handleLogin }) {
	const classes = useStyles(loginColorTheme);
	return (
		<ThemeProvider theme={loginColorTheme}>
			<Container component="main" maxWidth="xs">
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5" className={classes.title}>
						Login
					</Typography>
					<form className={classes.form} noValidate>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="account-number"
							label="Account Number"
							name="account-number"
							autoComplete="account-number"
							autoFocus
							placeholder="Masukkin apa aja"
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={handleLogin}
						>
							Login
						</Button>
					</form>
				</div>
			</Container>
		</ThemeProvider>
	);
}
