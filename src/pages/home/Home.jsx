/* eslint-disable no-unused-vars */
import {
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  makeStyles,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRequest } from 'redux-query-react';
import NextPageButton from '../../components/NextPageButton';
import PageTitle from '../../components/PageTitle';
import PaletteTypeButton from '../../components/PaletteTypeButton';
import ProfileDropdown from '../../components/ProfileDropdown';
import TopMenu from '../../components/TopMenu';
import { getScenes, scenesSelectors } from '../../state/queries/scenes';
import { accountSelectors } from '../../state/slices/account';
import { editorActions } from '../../state/slices/editor';
import { homeActions, homeSelectors } from '../../state/slices/home';
import AddMarkerDialog from './AddMarkerDialog';
import AddSceneCard from './AddSceneCard';
import HomeDrawer from './HomeDrawer';
import SceneCard from './SceneCard';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  cardGrid: {
    padding: 0,
    paddingBottom: theme.spacing(6),
  },
  loading: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Home() {
  const classes = useStyles();
  const accessToken = useSelector(accountSelectors.selectAccessToken);
  const scenes = useSelector(scenesSelectors.selectScenes);

  const channels = useSelector(accountSelectors.selectChannelsMeta);
  const channelIndex = useSelector(homeSelectors.selectSelectedChannelIndex);
  const selectedChannel = channels[channelIndex];

  const dispatch = useDispatch();
  const [{ isFinished }] = useRequest(
    getScenes(accessToken),
  );

  // Redireciona para o primeiro canal da lista, assim que
  // o download estiver pronto.
  useEffect(() => {
    if (isFinished) {
      dispatch(homeActions.setSelectedChannelIndex(0));
    }
  }, [isFinished]);

  const [markerDialogOpen, setMarkerDialogOpen] = useState(false);
  const handleOpenAddMarker = () => setMarkerDialogOpen(true);
  const handleCloseAddMarker = () => setMarkerDialogOpen(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopMenu position="fixed" />
      <HomeDrawer channels={channels}>
        <PaletteTypeButton />
        <ProfileDropdown />
      </HomeDrawer>
      <div className={classes.content}>
        <PageTitle title="Cenas" />
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <AddSceneCard handleOpenMarker={handleOpenAddMarker} />
            {!selectedChannel ? <div className={classes.loading}><CircularProgress /></div>
              : Object.keys(selectedChannel.scenes).map((key, idx) => (
                <SceneCard key={key} name={key} scene={selectedChannel.scenes[key]} id={idx} />
              ))}
          </Grid>
        </Container>
      </div>
      <AddMarkerDialog open={markerDialogOpen} handleClose={handleCloseAddMarker} />
    </div>
  );
}

export default Home;
