import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ForwardRoundedIcon from "@material-ui/icons/Forward";
import FormatListBulletedRoundedIcon from "@material-ui/icons/FormatListBulletedRounded";
import CreditCardRoundedIcon from "@material-ui/icons/CreditCardRounded";

const useStyles = makeStyles({
  root: {
    marginTop: "30px",
    textAlign: "center",
    // maxWidth: 500,
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none"
  },
  tabRoot: {
    fontFamily: "'Lato', sans-serif",
    textTransform: "capitalize",
    fontWeight: "bold",
    color: "#fff",
    borderColor: "#fff"
  }
});

export default function IconLabelTabs({ handleClick }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        aria-label="navigation"
      >
        <Tab
          icon={<HomeRoundedIcon />}
          label="Homepage"
          className={classes.tabRoot}
          disableRipple
          onClick={() => handleClick(4)}
        />
        <Tab
          icon={<FormatListBulletedRoundedIcon />}
          label="History"
          className={classes.tabRoot}
          disableRipple
          onClick={() => handleClick(2)}
        />
        <Tab
          icon={<CreditCardRoundedIcon />}
          label="Transfer"
          className={classes.tabRoot}
          disableRipple
          onClick={() => handleClick(3)}
        />
        <Tab
          icon={<ForwardRoundedIcon />}
          label="Logout"
          className={classes.tabRoot}
          disableRipple
          onClick={() => handleClick(1)}
        />
      </Tabs>
    </Paper>
  );
}
