import React from "react";
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
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white
	},
	body: {
		fontSize: 14
	}
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.background.default
		}
	}
}))(TableRow);

function createData(id, time, type, amount, account) {
	return { id, time, type, amount, account };
}

const rows = [
	// createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	// createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	// createData("Eclair", 262, 16.0, 24, 6.0),
	// createData("Cupcake", 305, 3.7, 67, 4.3),
	// createData("Gingerbread", 356, 16.0, 49, 3.9)
	createData("1", "1.30", "debit", "-100000", "r-12345678"),
	createData("2", "1.45", "kredit", "+100000", "r-12345678"),
	createData("3", "5.30", "debit", "-100000", "r-12345678")
];

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
	root: {
		width: "100%",
		marginTop: theme.spacing(3),
		overflowX: "auto"
	},
	table: {
		minWidth: 700
	}
}));

export default function TransactionTable() {
	const classes = useStyles();

	return (
		<Container component="main">
			<h1>Data Transaksi Bank Pro</h1>
			<Paper className={classes.root}>
				<Table className={classes.table} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell align="center">No</StyledTableCell>
							<StyledTableCell align="center">Waktu</StyledTableCell>
							<StyledTableCell align="center">Jenis Transaksi</StyledTableCell>
							<StyledTableCell align="center">Besar Transaksi</StyledTableCell>
							<StyledTableCell align="center">Rekening</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(row => (
							<StyledTableRow key={row.id}>
								<StyledTableCell component="th" scope="row">
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
