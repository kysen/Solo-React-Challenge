import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Representative from "../components/representative"

const useStyles = makeStyles(theme => ({
  homepageRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "20px"
    // width: "100%"
  },
}));

function Homepage() {
  const classes = useStyles();

  return (
    <div className={classes.homepageRoot}>
      <Representative />
    </div>
  )
}

export default Homepage