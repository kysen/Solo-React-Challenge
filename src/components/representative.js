import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button } from '@material-ui/core';


import RepOrSen from "./rep-or-sen"
import WhichState from "./which-state"

import SearchResults from "../views/SearchResults"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  title: {
    paddingBottom: 15
  },
  button: {
    marginTop: 15
  },

  
}));

function Representative() {
  const classes = useStyles();

  // representative or senator
  const [rep, setRep] = React.useState('');
  const handleSelectorChange = (event) => {
    setRep(event.target.value);
  };

  const [repEmpty, setRepEmpty] = React.useState(false)
  const [stEmpty, setStEmpty] = React.useState(false)

  // which state
  const [st, setSt] = React.useState('');
  const handleStChange = (event) => {
    setSt(event.target.value);
  };

  // modal
  const [open, setOpen] = React.useState(false);

  const handleSubmit = () => {
    if (rep === '') {
      setRepEmpty(true)
    } else if (st === '') {
      setStEmpty(true)
    } else {
      setRepEmpty(false)
      setStEmpty(false)
      setOpen(true)
    }
  }

  return (
    <div className={classes.root}>
      <Container >
        <Typography className={classes.title} color="primary" variant="h5" align='left'>
          Who's My Representative?
        </Typography>
        <RepOrSen rep={rep} handleSelectorChange={handleSelectorChange} />
        <Typography color="secondary" style={{display: repEmpty ? "block" : "none"}}>* Selection Required</Typography>
        <WhichState st={st} handleStChange={handleStChange} />
        <Typography color="secondary" style={{display: stEmpty ? "block" : "none"}}>* Selection Required</Typography>

        <Button className={classes.button} variant="contained" color="primary" onClick={handleSubmit} >
          Submit
        </Button>
        <SearchResults 
          open={open}
          close={() => setOpen(false)}
          setOpen={setOpen}
          rep={rep}
          st={st}
        />

      </Container>
    </div>
  )
}

export default Representative