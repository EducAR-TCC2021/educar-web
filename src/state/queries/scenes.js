import { createSelector } from '@reduxjs/toolkit';

// query config for retrieving current user's scenes
const getScenes = (accessToken) => ({
  url: 'https://4wu9au10o7.execute-api.us-east-1.amazonaws.com/dev/channels/',
  transform: (body) => ({
    scenes: body.Items[0].scenes,
  }),
  update: {
    scenes: (prev, next) => next,
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
