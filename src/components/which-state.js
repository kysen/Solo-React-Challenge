import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { Typography } from '@material-ui/core';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {},
}));

function WhichState(props) {
  const st = props.st
  const handleStChange = props.handleStChange

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl className={classes.margin}>
        <InputLabel id="demo-customized-select-label"><Typography variant="h6">State</Typography></InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={st}
          onChange={handleStChange}
          input={<BootstrapInput />}
        >
          <MenuItem value={'AL'}>Alabama</MenuItem>
          <MenuItem value={'AK'}>Alaska</MenuItem>
          <MenuItem value={'AZ'}>Arizona</MenuItem>
          <MenuItem value={'AR'}>Arkansas</MenuItem>
          <MenuItem value={'CA'}>California</MenuItem>
          <MenuItem value={'CO'}>Colorado </MenuItem>
          <MenuItem value={'CT'}>Connecticut </MenuItem>
          <MenuItem value={'DE'}>Delaware</MenuItem>
          <MenuItem value={'FL'}>Florida </MenuItem>
          <MenuItem value={'GA'}>Georgia </MenuItem>
          <MenuItem value={'HI'}>Hawaii </MenuItem>
          <MenuItem value={'ID'}>Idaho</MenuItem>
          <MenuItem value={'IL'}>Illinois</MenuItem>
          <MenuItem value={'IN'}>Indiana </MenuItem>
          <MenuItem value={'IA'}>Iowa </MenuItem>
          <MenuItem value={'KS'}>Kansas </MenuItem>
          <MenuItem value={'KY'}>Kentucky</MenuItem>
          <MenuItem value={'LA'}>Louisiana </MenuItem>
          <MenuItem value={'ME'}>Maine </MenuItem>
          <MenuItem value={'MD'}>Maryland </MenuItem>
          <MenuItem value={'MA'}>Massachusetts</MenuItem>
          <MenuItem value={'MI'}>Michigan </MenuItem>
          <MenuItem value={'MN'}>Minnesota </MenuItem>
          <MenuItem value={'MS'}>Mississippi </MenuItem>
          <MenuItem value={'MO'}>Missouri</MenuItem>
          <MenuItem value={'MT'}>Montana </MenuItem>
          <MenuItem value={'NE'}>Nebraska </MenuItem>
          <MenuItem value={'NV'}>Nevada </MenuItem>
          <MenuItem value={'NH'}>New Hampshire</MenuItem>
          <MenuItem value={'NJ'}>New Jersey</MenuItem>
          <MenuItem value={'NM'}>New Mexico</MenuItem>
          <MenuItem value={'NY'}>New York</MenuItem>
          <MenuItem value={'NC'}>North Carolina</MenuItem>
          <MenuItem value={'ND'}>North Dakota</MenuItem>
          <MenuItem value={'OH'}>Ohio </MenuItem>
          <MenuItem value={'OK'}>Oklahoma </MenuItem>
          <MenuItem value={'OR'}>Oregon </MenuItem>
          <MenuItem value={'PA'}>Pennsylvania </MenuItem>
          <MenuItem value={'RI'}>Rhode Island</MenuItem>
          <MenuItem value={'SC'}>South Carolina</MenuItem>
          <MenuItem value={'SD'}>South Dakota</MenuItem>
          <MenuItem value={'TN'}>Tennessee </MenuItem>
          <MenuItem value={'TX'}>Texas </MenuItem>
          <MenuItem value={'UT'}>Utah </MenuItem>
          <MenuItem value={'VT'}>Vermont </MenuItem>
          <MenuItem value={'VA'}>Virginia </MenuItem>
          <MenuItem value={'WA'}>Washington </MenuItem>
          <MenuItem value={'WV'}>West Virginia</MenuItem>
          <MenuItem value={'WI'}>Wisconsin </MenuItem>
          <MenuItem value={'WY'}>Wyoming </MenuItem>
        </Select>
        {/* <Typography>{st}</Typography> */}
      </FormControl>
    </div>
  )
}

export default WhichState