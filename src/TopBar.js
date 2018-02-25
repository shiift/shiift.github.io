import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
var { scroll } = require('./helpers/scrollHelper');


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function TopBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.flex}>
            LiamD.com
          </Typography>
          <Button color="inherit" href='#home' onClick={scroll}>Home</Button>
          <Button color="inherit" href='#resume' onClick={scroll}>Resume</Button>
          <Button color="inherit" href='#work' onClick={scroll}>Work</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);
