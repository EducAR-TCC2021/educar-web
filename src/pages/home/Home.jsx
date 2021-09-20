import React from 'react';
import {
  CircularProgress,
  Container,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useRequest } from 'redux-query-react';

import TopMenu from '../../components/TopMenu';
import PaletteTypeButton from '../../components/PaletteTypeButton';
import NextPageButton from '../../components/NextPageButton';
import ProfileDropdown from '../../components/ProfileDropdown';
import PageTitle from '../../components/PageTitle';
import { getScenes, scenesSelectors } from '../../state/queries/scenes';
import SceneCard from './SceneCard';
import { accountSelectors } from '../../state/slices/account';

const useStyles = makeStyles((theme) => ({
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
}));

function Home() {
  const classes = useStyles();
  const scenes = useSelector(scenesSelectors.selectScenes);
  const accessToken = useSelector(accountSelectors.selectAccessToken);
  const [{ isPending }] = useRequest(getScenes(accessToken));

  return (
    <>
      <TopMenu>
        <PaletteTypeButton />
        <ProfileDropdown />
        <NextPageButton redirectTo="/marcador">Criar Cena</NextPageButton>
      </TopMenu>
      <PageTitle title="Minhas Cenas" />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {isPending ? <div className={classes.loading}><CircularProgress /></div>
            : Object.keys(scenes).map((key, idx) => (
              <SceneCard scene={scenes[key]} id={idx} />
            ))}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
