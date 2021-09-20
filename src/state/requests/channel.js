/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const scenesArrayToDict = (scenes) => Object.assign({}, ...scenes.map(
  (scene) => {
    const sceneTemp = scene;
    const sceneName = scene.name;
    console.log(sceneTemp, sceneName);
    delete sceneTemp.name;
    return { [sceneName]: sceneTemp };
  },
));

const BASE_URL = 'https://4wu9au10o7.execute-api.us-east-1.amazonaws.com/dev/';

/**
 * Atualiza o conteúdo da cena em um canal.
 * @param accessToken - Token de acesso do usuário.
 * @param channelId - Id do canal do professor.
 * @param sceneId - Id da cena.
 * @param scene - Objeto cena, contendo trigger e array de overlays.
 */
const updateScene = ({
  accessToken,
  channelId,
  sceneId,
  scene,
}) => ({
  method: 'put',
  url: `/channels/${channelId}/scenes/${sceneId}`,
  baseURL: BASE_URL,
  data: {
    scene,
  },
  headers: {
    authorizationToken: accessToken,
  },
});

const channelRequests = {
  updateScene,
};

export default channelRequests;
