import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '../wrappers/material-ui';

export const useStyles = makeStyles((theme: Theme) => createStyles({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
  },
}));
