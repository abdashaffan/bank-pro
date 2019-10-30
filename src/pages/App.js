import React from "react";
import Login from "../components/login";
import TransactionTable from "../components/transaction";
import Transfer from "../components/transfer";

export default function App() {
	return (
		<div className="App">
			{/* <Login /> */}
			{/* <TransactionTable /> */}
			<Transfer />
		</div>
	);
}
