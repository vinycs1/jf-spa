import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { NAVBAR_TEXTS } from './navbar.constants';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {Object.values(NAVBAR_TEXTS).map((item) => (
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" key={item}>
              <Typography variant="h6" className={classes.title}>
                {item}
              </Typography>
            </IconButton>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
};
