import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Healing from '@material-ui/icons/Healing';
import FlashOn from '@material-ui/icons/FlashOn'

const Stats = (props) => {
  return (
    <div>
      <Paper className='stats' elevation={2}>
        <Typography variant="h5" component="h3">
          {props.name}
        </Typography>
        <GridList cellHeight={30} >
        <GridListTile>
            <Chip avatar={<Avatar><Healing /></Avatar>} label={props.hp} />
        </GridListTile>
        <GridListTile>
          <Chip avatar={<Avatar><FlashOn /></Avatar>} label={props.power} />
        </GridListTile>
        </GridList>
      </Paper>
    </div>
  )
}

export default Stats 
