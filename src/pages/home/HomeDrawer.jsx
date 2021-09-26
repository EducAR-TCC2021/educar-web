/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  makeStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import TopMenu from '../../components/TopMenu';
import { homeActions } from '../../state/slices/home';

const drawerWidth = 248;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: 2,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    marginTop: 48,
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function HomeDrawer({ channels, children }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClick = (index) => dispatch(homeActions.setSelectedChannel(index));

  const renderItem = (channel, index) => (
    <ListItem button onClick={() => handleClick(index)}>
      <ListItemText primary={channel.id} />
    </ListItem>
  );

  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <TopMenu position="fixed">
        {children}
      </TopMenu>
      <div className={classes.drawerContainer}>
        <List>
          <ListSubheader>Meus Canais</ListSubheader>
          { channels.map(renderItem) }
        </List>
      </div>
    </Drawer>
  );
}
HomeDrawer.propTypes = {
  channels: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
};

export default HomeDrawer;
