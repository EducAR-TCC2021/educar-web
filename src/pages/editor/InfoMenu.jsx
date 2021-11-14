import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useStore } from 'react-redux';
import {
  TextField,
  makeStyles,
  Typography,
  InputAdornment,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import { CheckBox, CheckBoxOutlineBlank } from '@material-ui/icons';

import { editorActions, editorSelectors } from '../../state/slices/editor';
import SideSubMenu from './SideSubMenu';

const useStyles = makeStyles(() => ({
  Inputs: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  CustomInput: {
    padding: '8px 8px 8px 0',
    fontSize: 'small',
  },
  CustomLabel: {
    fontSize: 'small',
  },
  box: {
    backgroundColor: '#808080',
    borderRadius: '4px',
    boxShadow: '0 3px 3px rgb(0,0,0,0.3)',
    margin: '0 3px',
  },
  title: {
  },
}));

function InfoMenuRow({
  values, onValueChange, title, proportionCheckbox,
}) {
  const classes = useStyles();
  const [proportion, setProportion] = useState(true);

  const getX = () => +values.x;
  const getY = () => +values.y;
  const getZ = () => +values.z;

  const handleXOnChange = (newX) => {
    if (proportionCheckbox && proportion) {
      onValueChange({
        x: newX,
        y: newX * ((getY() / getX()) || 1),
        z: newX * ((getZ() / getX()) || 1),
      });
    } else {
      onValueChange({ ...values, x: newX });
    }
  };

  const handleYOnChange = (newY) => {
    if (proportionCheckbox && proportion) {
      onValueChange({
        x: newY * ((getX() / getY()) || 1),
        y: newY,
        z: newY * ((getZ() / getY()) || 1),
      });
    } else {
      onValueChange({ ...values, y: newY });
    }
  };

  const handleZOnChange = (newZ) => {
    if (proportionCheckbox && proportion) {
      onValueChange({
        x: newZ * ((getX() / getZ()) || 1),
        y: newZ * ((getY() / getZ()) || 1),
        z: newZ,
      });
    } else {
      onValueChange({ ...values, z: newZ });
    }
  };

  return (
    <>
      <Typography
        className={classes.title}
        variant="button"
      >
        {title}
      </Typography>
      <div className={classes.Inputs}>
        <TextField
          className={classes.box}
          variant="outlined"
          size="small"
          value={getX()}
          type="number"
          onChange={(e) => handleXOnChange(+e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start">x:</InputAdornment>,
            classes: {
              input: classes.CustomInput,
            },
          }}
        />
        <TextField
          className={classes.box}
          variant="outlined"
          size="small"
          value={getY()}
          type="number"
          onChange={(e) => handleYOnChange(+e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start">y:</InputAdornment>,
            classes: {
              input: classes.CustomInput,
            },
          }}
        />
        <TextField
          className={classes.box}
          variant="outlined"
          size="small"
          value={getZ()}
          type="number"
          onChange={(e) => handleZOnChange(+e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start">z:</InputAdornment>,
            classes: {
              input: classes.CustomInput,
            },
          }}
        />
      </div>
      {
        proportionCheckbox
          ? (
            <FormControlLabel
              className={classes.CustomCheckbox}
              control={(
                <Checkbox
                  color="__"
                  name="LockRatio"
                  icon={<CheckBoxOutlineBlank fontSize="small" />}
                  checkedIcon={<CheckBox fontSize="small" />}
                  checked={proportion}
                  onChange={(e) => setProportion(e.target.checked)}
                  fontSize="small"
                />
              )}
              label={`Manter Proporção de ${title}`}
              classes={{
                label: classes.CustomLabel,
              }}
            />
          )
          : null
      }
    </>
  );
}
InfoMenuRow.propTypes = {
  values: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    z: PropTypes.number,
  }).isRequired,
  onValueChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  proportionCheckbox: PropTypes.bool,
};
InfoMenuRow.defaultProps = {
  proportionCheckbox: false,
};

function InfoMenu() {
  const [position, rotation, scale] = useSelector(editorSelectors.selectTransform);
  const store = useStore();

  const onPositionChange = (newPosition) => {
    store.dispatch(editorActions.setTransform({ position: newPosition }));
  };

  const onRotationChange = (newRotation) => {
    store.dispatch(editorActions.setTransform({ rotation: newRotation }));
  };

  const onScaleChange = (newScale) => {
    store.dispatch(editorActions.setTransform({ scale: newScale }));
  };

  return (
    <SideSubMenu
      title="Propriedades"
    >
      <InfoMenuRow title="Posição" values={position} onValueChange={onPositionChange} />
      <InfoMenuRow title="Rotação" values={rotation} onValueChange={onRotationChange} />
      <InfoMenuRow title="Escala" values={scale} onValueChange={onScaleChange} proportionCheckbox />
    </SideSubMenu>
  );
}

export default InfoMenu;
