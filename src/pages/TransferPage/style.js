import { makeStyles } from "@material-ui/core/styles";

const applyCustomStyles = makeStyles(theme => ({
	root: {
		backgroundColor: "#4caf50",
		height: "100vh"
	},
	heading: {
		color: "#fff",
		fontWeight: "bold",
		fontFamily: "'Lato', sans-serif"
		// marginTop: theme.spacing(5)
	},
	card: {
		marginBottom: theme.spacing(5)
	}
}));

export default applyCustomStyles;
