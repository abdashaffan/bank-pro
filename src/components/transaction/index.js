import React, {useState, useEffect} from "react";
import { getUserTransaction } from "../../utils/jaxws";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const StyledTableCell = withStyles(theme => ({
	head: {
		backgroundColor: "#333",
		color: theme.palette.common.white,
		fontWeight: "bold",
		fontSize: "17px",
		fontFamily: "'Lato', sans-serif"
	},
	body: {
		fontSize: 14,
		fontFamily: "'Lato', sans-serif"
	}
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.background.default
		},
		fontFamily: "'Lato', sans-serif"
	}
}))(TableRow);


const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		marginTop: theme.spacing(3),
		overflowX: "auto",
		border: "none",
		boxShadow: theme.shadows[15],
		borderRadius: "6px"
	},
	table: {
		minWidth: 700
	}
}));

export default  function TransactionTable({currAccNum}) {
	const [Data, setData] = useState([]);
	const classes = useStyles();

	
	useEffect(() => {
		var rows = [];
		async function handleDataTransaksi(currAccNum) {
			rows = await getUserTransaction(currAccNum);
			setData(rows);
		}
		handleDataTransaksi(currAccNum);
	}, [currAccNum]);


	return (
		<Container component="main" maxWidth="md">
			<Paper className={classes.root}>
				<Table className={classes.table} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell align="center">No</StyledTableCell>
							<StyledTableCell align="center">Time</StyledTableCell>
							<StyledTableCell align="center">Type</StyledTableCell>
							<StyledTableCell align="center">Amount</StyledTableCell>
							<StyledTableCell align="center">Acc. Number</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{Data.map(row => (
							<StyledTableRow key={row.id}>
								<StyledTableCell component="th" scope="row" align="center">
									{row.id}
								</StyledTableCell>
								<StyledTableCell align="center">{row.time}</StyledTableCell>
								<StyledTableCell align="center">{row.type}</StyledTableCell>
								<StyledTableCell align="center">{row.amount}</StyledTableCell>
								<StyledTableCell align="center">{row.account}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</Paper>
		</Container>
	);
}
