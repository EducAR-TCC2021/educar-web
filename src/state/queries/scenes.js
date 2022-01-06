import { createSelector } from '@reduxjs/toolkit';

// query config for retrieving current user's scenes
const getScenes = (accessToken) => ({
  url: 'https://fcdw7nbyud.execute-api.sa-east-1.amazonaws.com/qa/channels/',
  transform: (body) => ({ channels: body.Items }),
  update: {
    channels: (prev, next) => next,
  },
  options: {
    headers: {
      authorizationToken: accessToken,
    },
  },
  force: true,
});

const selectScenes = (state) => state.entities.scenes || {};

const selectSceneCards = createSelector(
  selectScenes,
  (scenes) => Object.keys().map((name, idx) => ({
    thumbnail: scenes[name].trigger,
    name,
    id: idx,
  })),
);

const scenesSelectors = {
  selectScenes,
  selectSceneCards,
};

export { getScenes, scenesSelectors };
