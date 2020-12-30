import React from 'react';
import { Popover, Typography } from '@material-ui/core';

function InDepth({person}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openPopover = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const closePopover = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
    <Typography className="hover-link" color='primary' onClick={openPopover}>{person.name}</Typography>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={closePopover}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
      >
        <div className="popover-list">
          <div>
              <Typography >Name:</Typography>
              <Typography >{person.name}</Typography>
          </div>
          <div>
              <Typography >State:</Typography>
              <Typography >{person.state}</Typography>
          </div>
          <div>
              <Typography >Party:</Typography>
              <Typography >{person.party}</Typography>
          </div>
          <div>
              <Typography >District:</Typography>
              <Typography >{person.district}</Typography>
          </div>
          <div>
              <Typography >Phone:</Typography>
              <Typography >{person.phone}</Typography>
          </div>
          <div>
              <Typography >Office:</Typography>
              <Typography  style={{textAlign: 'right', width: '200px'}}>{person.office}</Typography>
          </div>
          <div>
              <Typography style={{paddingRight: 20}} >Website:</Typography>
              <Typography className="hover-link" onClick={() => window.open(person.link, '_blank')}>{person.link}</Typography>
          </div>
        </div>
      </Popover>
    </div>
  )
}

export default InDepth