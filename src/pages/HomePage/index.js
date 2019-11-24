import React, {useState, useEffect} from "react";
import { getUserDataName } from "../../utils/jaxws";
import { getUserDataBalance } from "../../utils/jaxws";
import { getUserDataAccNum } from "../../utils/jaxws";

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

export default function HomePage({currAccNum}) {
  const [UserDataName, setUserDataName] = useState([]);
  const [UserDataBalance, setUserDataBalance] = useState([]);
  const [UserDataAccNum, setUserDataAccNum] = useState([]);
  const classes = applyCustomStyles();

  useEffect(() => {

      async function handleDataHome(currAccNum) {
        const response = await Promise.all([
          getUserDataName(currAccNum),
          getUserDataBalance(currAccNum),
          getUserDataAccNum(currAccNum)
        ]);
        setUserDataName(response[0]);
        setUserDataBalance(response[1]);
        setUserDataAccNum(response[2]);

      }
      handleDataHome(currAccNum);

  }, [currAccNum]);




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
            {/* {UserData.map(row => ( */}
              <ListItemText primary="Name" secondary={UserDataName} />
            {/* ))}; */}
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <AccountBalanceWalletRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            {/* {UserData.map(row => ( */}
              <ListItemText primary="Account Number" secondary={UserDataAccNum} />
            {/* // ))}; */}
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <LocalAtmRoundedIcon />
              </Avatar>
            </ListItemAvatar>
            {/* {UserData.map(row => ( */}
              <ListItemText primary="Balance" secondary={UserDataBalance} />
            {/* ))}; */}
          </ListItem>
        </List>
      </Grid>
    </>
  );
}
