import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link, BrowserRouter as Router, Redirect, NavLink} from 'react-router-dom'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={`${classes.root} navbar`}>
      <AppBar position="static" className="navbar">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Betta Fish Fight Club <i class="fas fa-fish"></i>
          </Typography>
            <NavLink id='link' to='/fishes'>
          <Button id='fishesBttn' variant="outlined">
          Fishes_<i class="fas fa-fish"></i>
          </Button>
          </NavLink>
            <NavLink id='link' to='/hatch'>
          <Button id='hatchBttn' variant="outlined">
          Hatch_<i class="fas fa-egg"></i>
          </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
