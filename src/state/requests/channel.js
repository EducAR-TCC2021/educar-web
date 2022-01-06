const BASE_URL = 'https://fcdw7nbyud.execute-api.sa-east-1.amazonaws.com/qa/';

/**
 * Atualiza ou Cria o conteúdo da cena em um canal.
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

/**
 * Cria um canal.
 * @param accessToken - Token de acesso do usuário.
 * @param channelId - Id do canal do professor.
 * @param password - Senha do canal. (Opcional)
 */
const createChannel = ({
  accessToken,
  channelId,
  password,
}) => ({
  method: 'post',
  url: '/channels',
  baseURL: BASE_URL,
  data: {
    id: channelId,
    ...(password && { password }),
    scenes: {},
  },
  headers: {
    authorizationToken: accessToken,
  },
});

const deleteChannel = ({
  accessToken,
  channelId,
}) => ({
  method: 'delete',
  url: `/channels/${channelId}`,
  baseURL: BASE_URL,
  headers: {
    authorizationToken: accessToken,
  },
});

const deleteScene = ({
  accessToken,
  channelId,
  sceneId,
}) => ({
  method: 'delete',
  url: `/channels/${channelId}/scenes/${sceneId}`,
  baseURL: BASE_URL,
  headers: {
    authorizationToken: accessToken,
  },
});

const channelRequests = {
  updateScene,
  createChannel,
  deleteChannel,
  deleteScene,
};

export default channelRequests;
