import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, Grid } from '@material-ui/core';

import axios from "axios";

import PersonInfo from "./personInfo"
const useStyles = makeStyles(theme => ({
  searchResultsRoot: {
  },
  gridItem: {
    paddingTop: "20px"
  },
  peopleContainer: {
    maxHeight: "40vh",
    overflow: "auto"
  },
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


function SearchResults({displayResults, setDisplayResults, rep, st}) {
  const classes = useStyles();
  const defaultState = {
    name: 'Name',
    state: 'State',
    party: 'Party',
    district: 'District',
    phone: 'Phone',
    office: 'Office',
    link: 'Website',
  }
  const [data, setData] = React.useState([])
  const [selectedPerson, setSelectedPerson] = React.useState(defaultState)
  
  React.useEffect(() =>{
    setSelectedPerson(defaultState)
    setDisplayResults(false)
    if (rep && st) {

      async function fetchData() {
        const result = await axios(
          `http://localhost:3000/${rep === 'reps' ? 'representatives' : 'senators'}/${st}`,
          );
          
          setData(result.data.results)
        };
        
        fetchData();
     }
  }, [st, rep]);

  const mapData = () => {
    return data.map((person, index) => {
      return (          
      <ListItem key={index} className={classes.listItem}>
        <Typography className="hover-link" color='primary' onClick={() => {if (selectedPerson.name === person.name) {setSelectedPerson(defaultState)} else {setSelectedPerson(person)}}}>{person.name}</Typography>
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
    <Grid container className={classes.searchResultsRoot} style={{display: displayResults ? "block" : "none"}}>
      <Grid item className={classes.gridItem}>
        <div className={classes.subTitle}>
          <Typography variant='h5' >List / </Typography>
          <Typography color="primary" variant="h5" style={{marginLeft: "8px"}}>{rep === 'reps' ? 'Representatives' : "Senators"}</Typography>
        </div>
        <Grid container className={classes.peopleContainer}>
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
      </Grid>
      <Grid item className={classes.gridItem}>
        <div className={classes.subTitle}>
          <Typography variant='h5' >Info </Typography>
        </div>
        <PersonInfo person={selectedPerson}/>
      </Grid>
    </Grid>
  )
}

export default SearchResults