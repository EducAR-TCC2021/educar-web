const BASE_URL = 'https://4wu9au10o7.execute-api.us-east-1.amazonaws.com/dev/';

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
  url: `/channels/${channelId}`,
  baseURL: BASE_URL,
  data: {
    channelId,
    password,
  },
  headers: {
    authorizationToken: accessToken,
  },
});

const channelRequests = {
  updateScene,
  createChannel,
};

export default channelRequests;
