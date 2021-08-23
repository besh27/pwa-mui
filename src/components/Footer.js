import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  Footer: {
    height: 50,
    width: "100%",
    textAlign: "center",
    position: "fixed",
    left: 0,
    bottom: 0
  }
});

const Footer = () => {
  const classes = useStyles();

  const dt = new Date();
  const curYear = dt.getYear();

  return (
    <Grid className={classes.Footer}>
      <Typography variant="caption">Copyright {curYear}</Typography>
    </Grid>
  );
};

export default Footer;
