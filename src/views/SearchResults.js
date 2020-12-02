import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, List, ListItem, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import axios from "axios";

import InDepth from "../components/in-depth"
const useStyles = makeStyles(theme => ({
  list: {
    borderTop: "2px solid #f0f0f0"
  },
  listItem: {
    borderBottom: "2px solid #f0f0f0"
  },
  subTitle: {
    display: 'flex'
  },
}));


function SearchResults({open, close, setOpen, rep, st}) {
  const classes = useStyles();
  
  const [data, setData] = React.useState([])
  
  React.useEffect(() =>{
    if (rep && st) {

      async function fetchData() {
        const result = await axios(
          `http://localhost:3000/${rep === 'reps' ? 'representatives' : 'senators'}/${st}`,
          );
          
          console.log(result.data.results)
          setData(result.data.results)
        };
        
        fetchData();
     }
  }, [st, rep]);

  const mapData = () => {
    return data.map((person, index) => {
      return (          
      <ListItem key={index} className={classes.listItem}>
        <InDepth person={person}></InDepth>
      </ListItem>
      )
    })
  };
  const getParty = () => {
    return data.map((person, index) => {
      return (          
      <ListItem key={index} className={classes.listItem}>
        <Typography className={classes.firstLetterOnly}>
          {person.party}
        </Typography>
      </ListItem>
      )
    })
  };
  
  return (
    <div 
      className='modal-root'
      style={open ? {} : { display: "none" }}
    >
  
     <div className="modal-div">
      <div className="close-icon-container">
        <CloseIcon className="close-icon" style={{ color: '#f0f0f0', fontSize: 50}} onClick={close}></CloseIcon>
      </div>
      <Paper className='modal-paper' onClick={() => setOpen(true)}>
        <div className={classes.subTitle}>
          <Typography variant='h5' >List / </Typography>
          <Typography color="primary" variant="h5" style={{marginLeft: "8px"}}>{rep === 'reps' ? 'Representatives' : "Senators"}</Typography>
        </div>
        <Grid container>

          <Grid item xs={8}>
            <List className={classes.list} disablePadding>
              <ListItem className={classes.listItem} style={{backgroundColor: "#f0f0f0"}}>
                <Typography>Name</Typography>
              </ListItem>
              {mapData()}
            </List>
          </Grid>

          <Grid item xs={4}>
            <List className={classes.list} disablePadding>
              <ListItem className={classes.listItem} style={{backgroundColor: "#f0f0f0"}}>
                <Typography>Party</Typography>
              </ListItem>
              {getParty()}
            </List>
          </Grid>

        </Grid>
      </Paper>
      </div>
    </div>
  )
}

export default SearchResults