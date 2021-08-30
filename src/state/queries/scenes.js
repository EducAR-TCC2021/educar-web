import { createSelector } from '@reduxjs/toolkit';

// query config for retrieving current user's scenes
const getScenes = {
  url: 'https://hd90gur552.execute-api.us-east-1.amazonaws.com/teste/payloads',
  transform: (body) => ({
    scenes: body.Items[0].payloads,
  }),
  update: {
    scenes: (prev, next) => next,
  },
  options: {
    headers: {
      authorizationToken: 'allow',
    },
  },
  force: true,
};

const selectScenes = (state) => state.entities.scenes || [];

const selectSceneCards = createSelector(
  selectScenes,
  (scenes) => scenes.map((scene, idx) => ({
    thumbnail: scene.trigger,
    name: scene.name,
    id: idx,
  })),
);

const scenesSelectors = {
  selectScenes,
  selectSceneCards,
};

export { getScenes, scenesSelectors };
