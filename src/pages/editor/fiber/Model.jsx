/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, {
  Suspense,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { Sphere, useGLTF } from '@react-three/drei';
import { useSelector, useStore } from 'react-redux';
import JSZip from 'jszip';

import { accountSelectors } from '../../../state/slices/account';
import { editorActions, editorSelectors } from '../../../state/slices/editor';
import { blobFilesActions, blobFilesSelectors } from '../../../state/slices/blobs';

// Esfera rosa representando que o modelo está carregando.
const Fallback = () => (
  <Sphere>
    <meshBasicMaterial attach="material" color="hotpink" />
  </Sphere>
);

// Modelo 3D
const GltfModel = ({ url, initialParam, onDoubleClick }) => {
  const {
    initialPosition,
    initialRotation,
    initialScale,
  } = initialParam;
  const gltf = useGLTF(url);

  // Enquanto o modelo carrega, exibir modelo de Fallback
  return (gltf)
    ? (
      <Suspense fallback={<div />}>
        <mesh onDoubleClick={onDoubleClick}>
          <primitive
            position={initialPosition}
            rotation={initialRotation}
            scale={initialScale}
            name="3dmodel"
            object={gltf.scene}
          />
        </mesh>
      </Suspense>
    )
    : <Fallback />;
};
GltfModel.defaultProps = {
  onDoubleClick: () => {},
};
GltfModel.propTypes = {
  url: PropTypes.string.isRequired,
  initialParam: PropTypes.any.isRequired,
  onDoubleClick: PropTypes.func,
};

function getExtension(filename) {
  return filename.toLowerCase().split('.').pop();
}

async function getFileUrl(file) {
  const blob = await file.async('blob');
  const url = URL.createObjectURL(blob);
  return url;
}

async function updateGltfLinks(file, blobUrls) {
  let gltfString = await file.async('string');
  Object.keys(blobUrls).forEach((url) => {
    gltfString = gltfString.replace(url, blobUrls[url]);
  });
  const entryBlob = new Blob([gltfString]);
  return URL.createObjectURL(entryBlob);
}

async function readGltfFromZipUrl(zipUrl) {
  const response = await fetch(zipUrl);
  const arrayBuffer = await response.arrayBuffer();

  const result = await JSZip.loadAsync(arrayBuffer);

  const files = Object.values(result.files).filter((item) => !item.dir);
  const entryFile = files.find((file) => getExtension(file.name) === 'gltf');
  files.splice(files.indexOf(entryFile), 1);
  const blobUrls = {};

  await Promise.all(files.map(async (file) => {
    blobUrls[file.name] = await getFileUrl(file);
  }));

  const fileUrl = await updateGltfLinks(entryFile, blobUrls);
  return fileUrl;
}

async function getDownloadUrl(modelId, token) {
  const metadataUrl = `https://api.sketchfab.com/v3/models/${modelId}/download`;
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    mode: 'cors',
  };
  const response = await fetch(metadataUrl, options);
  const metadata = await response.json();
  return metadata.gltf.url;
}

const SketchfabModel = ({ modelId, initialParam, onDoubleClick }) => {
  const [blobUrl, setBlobUrl] = useState('');
  const token = useSelector(accountSelectors.selectAccessToken);
  const blobFiles = useSelector(blobFilesSelectors.selectBlobFiles);
  const store = useStore();

  useEffect(async () => {
    if (!blobFiles[modelId]) {
      store.dispatch(blobFilesActions.setBlobFile({
        key: modelId, value: { isDownloading: true },
      }));
      const downloadUrl = await getDownloadUrl(modelId, token);
      const fileUrl = await readGltfFromZipUrl(downloadUrl);
      store.dispatch(blobFilesActions.setBlobFile(
        { key: modelId, value: { isDownloading: false, fileUrl } },
      ));
      setBlobUrl(fileUrl);
    } else if (!blobFiles[modelId].isDownloading) {
      setBlobUrl(blobFiles[modelId].fileUrl);
    }
  }, [modelId, blobFiles[modelId]]);

  return (blobUrl)
    ? (
      <GltfModel
        url={blobUrl}
        initialParam={initialParam}
        onDoubleClick={onDoubleClick}
      />
    )
    : <Fallback />;
};
SketchfabModel.defaultProps = {
  onDoubleClick: () => {},
};
SketchfabModel.propTypes = {
  modelId: PropTypes.string.isRequired,
  initialParam: PropTypes.any.isRequired,
  onDoubleClick: PropTypes.func,
};

export default SketchfabModel;
