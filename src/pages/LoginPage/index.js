import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// Custom component and styles
import Login from "../../components/login";
import applyCustomStyles from "./style";

export default function LoginPage({ handleLogin, isLoading, isValidLogin }) {
  const classes = applyCustomStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xl={6}>
        <Typography variant="h3" gutterBottom className={classes.heading}>
          Welcome to BankPro.
        </Typography>
      </Grid>
      <Grid item xl={6} className={classes.card}>
        <Login
          handleLogin={handleLogin}
          isLoading={isLoading}
          isValidLogin={isValidLogin}
        />
      </Grid>
    </Grid>
  );
}
