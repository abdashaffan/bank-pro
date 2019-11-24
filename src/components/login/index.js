import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
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

export default function Login({ handleLogin, isLoading, isValidLogin }) {
  const [loginInput, setLoginInput] = useState("");
  const [ableToError, setAbleToError] = useState(false);
  const classes = useStyles(loginColorTheme);

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(loginInput);
    setAbleToError(true);
  }

  function handleChange(e) {
    setLoginInput(e.target.value);
    setAbleToError(false);
  }

  function isError() {
    return !isValidLogin && ableToError;
  }
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
          <form className={classes.form} onSubmit={e => handleSubmit(e)}>
            {isLoading ? <LinearProgress /> : <></>}
            <TextField
              error={isError()}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="account-number"
              label="Account Number"
              name="account-number"
              autoComplete="off"
              autoFocus
              onChange={e => handleChange(e)}
              onClick={() => setAbleToError(false)}
              placeholder="10001 atau 10002"
              helperText={isError() ? "Invalid account number" : ""}
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
    </ThemeProvider>
  );
}
