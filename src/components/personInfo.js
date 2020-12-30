import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  infoItem: {
    backgroundColor: "#f0f0f0",
    width: "100%",
    margin: 8,
    padding: 15,
    fontSize: '17px', 
  }
}));

function PersonInfo({person}) {
  const classes = useStyles();

  const [data, setData] = React.useState(false)

  React.useEffect(() => {
    if (person.name === 'Name') {
      setData(false)
    } else {
      setData(true)
    }
  }, [person])

  return (
    <Grid container style={{color: data ? '' : "#a8a8a8"}}>
          <Grid item className={classes.infoItem} >
            {person.name}
          </Grid>
          <Grid item className={classes.infoItem} >
            {person.state}
          </Grid>
          <Grid item className={classes.infoItem} >
            {person.party}
          </Grid>
          <Grid item className={classes.infoItem} >
            {person.district === '' ? 'District N/A' : person.district}
          </Grid>
          <Grid item className={classes.infoItem} >
            {person.phone}
          </Grid>
          <Grid item className={classes.infoItem} >
            {person.office}
          </Grid>
          <Grid item className={classes.infoItem}  >
            <div className="hover-link" onClick={() => window.open(person.link, '_blank')}>{person.link}</div>
          </Grid>
        </Grid>
  )
}

export default PersonInfo