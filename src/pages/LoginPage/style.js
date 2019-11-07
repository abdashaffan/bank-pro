import { makeStyles } from "@material-ui/core/styles";

const applyCustomStyles = makeStyles(theme => ({
	root: {
		backgroundColor: "#0288d1",
		height: "100vh"
	},
	heading: {
		color: "#fff",
		fontWeight: "bold",
		fontFamily: "'Lato', sans-serif",
		marginTop: theme.spacing(5)
	},
	card: {
		marginTop: theme.spacing(5)
	}
}));

export default applyCustomStyles;
