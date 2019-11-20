// React dependencies
import React, { useState } from "react";

// Module for consuming SOAP webservice
import { checkLoginCredentials } from "../utils/jaxws";

// React MUI component for styling
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// Custom component for styling
import IconLabelTabs from "../components/navbar";
import LoginPage from "./LoginPage";
import TransferPage from "./TransferPage";
import TransactionPage from "./TransactionPage";
import HomePage from "./HomePage";

const applyCustomStyles = makeStyles(() => ({
  rootHome: {
    backgroundColor: "#4caf50",
    minHeight: "100vh"
  },
  rootLogin: {
    backgroundColor: "#0288d1",
    minHeight: "100vh"
  }
}));

const LOGIN = 1;
const TRANSACTION = 2;
const TRANSFER = 3;
const HOME = 4;

function ShowedPage({ page, handleLogin, isLoading, isValidLogin }) {
  switch (true) {
    case page === LOGIN:
      return (
        <LoginPage
          handleLogin={handleLogin}
          isLoading={isLoading}
          isValidLogin={isValidLogin}
        />
      );
    case page === TRANSACTION:
      return <TransactionPage />;
    case page === TRANSFER:
      return <TransferPage />;
    case page === HOME:
      return <HomePage />;
    default:
      return (
        <LoginPage
          handleLogin={handleLogin}
          isLoading={isLoading}
          isValidLogin={isValidLogin}
        />
      );
  }
}

export default function App() {
  const [page, setPage] = useState(LOGIN); //LOGIN, TRANSACTION, TRANSFER, or HOME
  const [isLoading, setIsLoading] = useState(false); // if true show loader component
  const [isValidLogin, setIsValidLogin] = useState(true);
  const classes = applyCustomStyles();

  function handleClick(buttonId) {
    if (buttonId === HOME) {
      setIsValidLogin(true);
    }
    setPage(buttonId);
  }
  async function handleLogin(accNum) {
    setIsValidLogin(true);
    setIsLoading(true);
    const loginStatus = await checkLoginCredentials(accNum);
    if (loginStatus === true) {
      setPage(HOME);
    } else {
      setIsValidLogin(false);
    }
    setIsLoading(false);
  }

  function isHomePage() {
    return page !== LOGIN;
  }

  return (
    <>
      <CssBaseline />
      <Grid
        container
        direction={isHomePage() ? "column" : "row"}
        justify={isHomePage() ? "flex-start" : "center"}
        alignItems="center"
        className={isHomePage() ? classes.rootHome : classes.rootLogin}
      >
        {isHomePage() ? (
          <Grid item xs={12}>
            <IconLabelTabs handleClick={handleClick} />
          </Grid>
        ) : (
          <></>
        )}
        <Grid item xs={12}>
          <ShowedPage
            page={page}
            handleLogin={handleLogin}
            isLoading={isLoading}
            isValidLogin={isValidLogin}
          />
        </Grid>
      </Grid>
    </>
  );
}
