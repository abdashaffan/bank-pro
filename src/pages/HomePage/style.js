import { makeStyles } from "@material-ui/core/styles";

const applyCustomStyles = makeStyles(theme => ({
  heading: {
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "'Lato', sans-serif",
    marginTop: theme.spacing(5)
  },
  card: {
    marginBottom: theme.spacing(5)
  },
  root: {
    minWidth: "500px",
    borderRadius: "6px",
    marginTop: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    paddingLeft: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    boxShadow: theme.shadows[12]
  },
  avatar: {
    backgroundColor: "#4caf50"
  }
}));

export default applyCustomStyles;
