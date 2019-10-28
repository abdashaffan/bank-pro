import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
	"@global": {
		body: {
			backgroundColor: theme.palette.common.white,
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			width: "100vw",
			height: "100vh"
		}
	},
	paper: {
		// marginTop: theme.spacing(8),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#fafafa",
		borderRadius: "6px",
		padding: "2em 3em",
		border: "1px solid rgba(32,33,36,0.28)",
		boxShadow: "0 4px 4px 0 rgba(32,33,36,0.28)"
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	},
	title: {
		color: "#333",
		textTransform: "uppercase",
		fontWeight: "bold",
		textAlign: "center",
		letterSpacing: "1.5px"
	}
}));

export default function Login() {
	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<h1 className={classes.title}>Bank Pro</h1>
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Login
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="account-number"
						label="Nomor Rekening"
						name="account-number"
						autoComplete="account-number"
						autoFocus
						placeholder="Misal 123456789"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Login
					</Button>
				</form>
			</div>
		</Container>
	);
}
