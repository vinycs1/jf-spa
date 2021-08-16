import React from 'react';
import {
  TextField as MaterialTextField,
} from '@material-ui/core';

export const TextField = ({ id, label }) => (
  <MaterialTextField
    id={id}
    label={label}
    variant="outlined"
  />
);
