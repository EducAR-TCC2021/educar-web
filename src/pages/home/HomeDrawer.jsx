/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  makeStyles,
} from '@material-ui/core';
import { Add, MoreVert } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TopMenu from '../../components/TopMenu';
import { homeActions, homeSelectors } from '../../state/slices/home';
import AddChannelDialog from './AddChannelDialog';
import ChannelMoreMenu from './ChannelMoreMenu';

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
  const handleClick = (index) => dispatch(homeActions.setSelectedChannelIndex(index));

  const [channelDialogOpen, setChannelDialogOpen] = useState(false);
  const handleOpenAddChannel = () => setChannelDialogOpen(true);
  const handleCloseAddChannel = () => setChannelDialogOpen(false);
  const selectedChannelIndex = useSelector(homeSelectors.selectSelectedChannelIndex);

  const [anchorEl, setAnchorEl] = useState(null);
  const [channelId, setChannelId] = useState(0);

  const handleOpenMenu = (event, callback) => {
    setAnchorEl(event.currentTarget);
    callback();
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const renderItem = (channel, index) => (
    <ListItem
      key={channel.id}
      button
      selected={selectedChannelIndex === index}
      onClick={() => handleClick(index)}
    >
      <ListItemText primary={channel.id} />
      <ListItemSecondaryAction>
        <IconButton
          onClick={(e) => handleOpenMenu(e, () => setChannelId(channel.id))}
        >
          <MoreVert />
        </IconButton>
      </ListItemSecondaryAction>
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
      <TopMenu position="fixed">{children}</TopMenu>
      <div className={classes.drawerContainer}>
        <List>
          <ListSubheader>
            Meus Canais
            <ListItemSecondaryAction>
              <IconButton edge="end" onClick={handleOpenAddChannel}>
                <Add />
              </IconButton>
            </ListItemSecondaryAction>
          </ListSubheader>
          {channels.map(renderItem)}
        </List>
      </div>
      <AddChannelDialog
        open={channelDialogOpen}
        handleClose={handleCloseAddChannel}
      />
      <ChannelMoreMenu
        channelId={channelId}
        anchorEl={anchorEl}
        handleClose={handleCloseMenu}
      />
    </Drawer>
  );
}
HomeDrawer.propTypes = {
  channels: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
};

export default HomeDrawer;
