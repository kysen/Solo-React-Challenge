import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {},
}));

function RepOrSen(props) {
  const rep = props.rep
  const handleSelectorChange = props.handleSelectorChange
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl component="fieldset">
        <FormLabel component="legend"><Typography variant="subtitle2">Search by Representative or Senator</Typography></FormLabel>
        <RadioGroup aria-label="rep-or-senator" name="rep-or-senator" value={rep} onChange={handleSelectorChange}>
          <FormControlLabel value="reps" control={<Radio />} label="Representative" />
          <FormControlLabel value="sens" control={<Radio />} label="Senator" />
         </RadioGroup>
      </FormControl>
      {/* <Typography> {rep}</Typography> */}
    </div>
  )
}

export default RepOrSen