/* eslint-disable no-nested-ternary */
import {
  CircularProgress,
  Container,
  CssBaseline,
  Grid,
  makeStyles,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useRequest } from 'redux-query-react';
import PageTitle from '../../components/PageTitle';
import ProfileDropdown from '../../components/ProfileDropdown';
import TopMenu from '../../components/TopMenu';
import { getScenes } from '../../state/queries/scenes';
import { accountSelectors } from '../../state/slices/account';
import { editorActions } from '../../state/slices/editor';
import { homeActions, homeSelectors } from '../../state/slices/home';
import AddMarkerDialog from './AddMarkerDialog';
import AddSceneCard from './AddSceneCard';
import HomeDrawer from './HomeDrawer';
import HomeSnackbar from './HomeSnackbar';
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
  const store = useStore();
  const channels = useSelector(accountSelectors.selectChannelsMeta);
  const channelIndex = useSelector(homeSelectors.selectSelectedChannelIndex);
  const selectedChannel = channels[channelIndex];

  const dispatch = useDispatch();
  const [{ isFinished }] = useRequest(getScenes(accessToken));

  // Redireciona para o primeiro canal da lista, assim que
  // o download estiver pronto.
  useEffect(() => {
    if (isFinished) {
      const index = channelIndex || 0;
      dispatch(homeActions.setSelectedChannelIndex(index));
    }
  }, [isFinished]);

  useEffect(() => {
    store.dispatch(editorActions.clearEditorState());
  }, []);

  const [markerDialogOpen, setMarkerDialogOpen] = useState(false);
  const handleOpenAddMarker = () => setMarkerDialogOpen(true);
  const handleCloseAddMarker = () => setMarkerDialogOpen(false);
  const channelName = (selectedChannel) ? selectedChannel.id : '';

  return (
    <div className={classes.root}>
      <CssBaseline />
      <TopMenu position="fixed" />
      <HomeDrawer channels={channels}>
        <ProfileDropdown />
      </HomeDrawer>
      <div className={classes.content}>
        <PageTitle title={isFinished && channels.length ? channelName : 'Nenhum canal registrado.'} />
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {
              !isFinished ? (
                <div className={classes.loading}>
                  <CircularProgress />
                </div>
              ) : channels.length ? (
                <>
                  <AddSceneCard handleOpenMarker={handleOpenAddMarker} />
                  {selectedChannel && Object.keys(selectedChannel.scenes).map((key, idx) => (
                    <SceneCard
                      key={key}
                      name={key}
                      scene={selectedChannel.scenes[key]}
                      id={idx}
                    />
                  ))}
                </>
              ) : null
            }
          </Grid>
        </Container>
      </div>
      <AddMarkerDialog
        open={markerDialogOpen}
        handleClose={handleCloseAddMarker}
      />
      <HomeSnackbar />
    </div>
  );
}

export default Home;
