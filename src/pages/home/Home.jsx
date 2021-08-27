import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  makeStyles,
  Link,
} from '@material-ui/core';

import TopMenu from '../../components/TopMenu';
import PaletteTypeButton from '../../components/PaletteTypeButton';
import NextPageButton from '../../components/NextPageButton';
import ProfileDropdown from '../../components/ProfileDropdown';
import PageTitle from '../../components/PageTitle';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    height: '75vh',
    overflowY: 'scroll',
    border: '1px solid grey',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

function Home() {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => ({
    thumbnail: 'https://source.unsplash.com/random',
    name: `Minha Cena ${i}`,
    description: 'Uma cena de exemplo.',
    id: i,
  }));

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
          {cards.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.thumbnail}
                  title="Thumbnail"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                  </Typography>
                  <Typography>
                    {card.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    <Link href="/editor">
                      Editar
                    </Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
