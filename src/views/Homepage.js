import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Representative from "../components/representative"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh"
  },
}));

function Homepage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Representative />
    </div>
  )
}

export default Homepage