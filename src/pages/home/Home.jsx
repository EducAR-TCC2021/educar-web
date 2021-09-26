import {
  CircularProgress,
  Container,
  Grid,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRequest } from 'redux-query-react';
import NextPageButton from '../../components/NextPageButton';
import PageTitle from '../../components/PageTitle';
import PaletteTypeButton from '../../components/PaletteTypeButton';
import ProfileDropdown from '../../components/ProfileDropdown';
import TopMenu from '../../components/TopMenu';
import { getScenes, scenesSelectors } from '../../state/queries/scenes';
import { accountSelectors } from '../../state/slices/account';
import { editorActions } from '../../state/slices/editor';
import AddSceneCard from './AddSceneCard';
import SceneCard from './SceneCard';

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
  const accessToken = useSelector(accountSelectors.selectAccessToken);
  const scenes = useSelector(scenesSelectors.selectScenes);
  const [{ isPending }] = useRequest(getScenes(accessToken));

  const dispatch = useDispatch();
  const handleAdd = () => dispatch(editorActions.clearEditorState());

  return (
    <>
      <TopMenu>
        <PaletteTypeButton />
        <ProfileDropdown />
        <NextPageButton
          redirectTo="/marcador"
          onClick={handleAdd}
        >
          Criar Cena
        </NextPageButton>
      </TopMenu>
      <PageTitle title="Minhas Cenas" />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {isPending ? <div className={classes.loading}><CircularProgress /></div>
            : Object.keys(scenes).map((key, idx) => (
              <SceneCard key={key} name={key} scene={scenes[key]} id={idx} />
            ))}
          <AddSceneCard />
        </Grid>
      </Container>
    </>
  );
}

export default Home;
