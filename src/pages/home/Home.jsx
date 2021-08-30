/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {
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

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    padding: 0,
    paddingBottom: theme.spacing(6),
  },
}));

function Home() {
  const classes = useStyles();
  const sceneCards = useSelector(scenesSelectors.selectSceneCards);
  const [{ isPending, status }, refresh] = useRequest(getScenes);

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
          {sceneCards.map((card) => (
            <SceneCard id={card.id} name={card.name} thumbnail={card.thumbnail} />
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
