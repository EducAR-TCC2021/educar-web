import { createSelector } from '@reduxjs/toolkit';

// query config for retrieving current user's scenes
const getScenes = (accessToken) => ({
  url: 'https://4wu9au10o7.execute-api.us-east-1.amazonaws.com/dev/channels/',
  transform: (body) => ({
    channel_id: body.Items[2].id,
    scenes: body.Items[2].scenes,
  }),
  update: {
    scenes: (prev, next) => next,
    channel_id: (prev, next) => next,
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
