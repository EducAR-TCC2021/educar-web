import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

function SceneTextField() {
  const [state, setstate] = useState('Nome da cena');
  return (
    <TextField
      id="sceneName"
      value={state}
      onChange={(e) => setstate(e.target.value)}
    />
  );
}

export default SceneTextField;
