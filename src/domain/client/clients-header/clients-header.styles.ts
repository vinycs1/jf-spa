import { makeStyles } from '../../../shared/wrappers/material-ui';

export const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '10em',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
}));
