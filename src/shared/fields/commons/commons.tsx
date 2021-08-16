import React from 'react';
import { useStyles } from './commons.styles';

export const TextsFieldRow = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.row}>{children}</div>
  );
};
