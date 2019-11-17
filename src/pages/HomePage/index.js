import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountBalanceWalletRoundedIcon from "@material-ui/icons/AccountBalanceWalletRounded";
import LocalAtmRoundedIcon from "@material-ui/icons/LocalAtmRounded";

// Custom styles
import applyCustomStyles from "./style";

export default function FolderList() {
  const classes = applyCustomStyles();

  return (
    <>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          gutterBottom
          className={classes.heading}
          align="center"
        >
          Your BankPro Account
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.card}>
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <AccountCircleIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Name" secondary="Abda Shaffan" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <AccountBalanceWalletRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Account Number" secondary="10003" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <LocalAtmRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Balance" secondary="100000" />
          </ListItem>
        </List>
      </Grid>
    </>
  );
}
