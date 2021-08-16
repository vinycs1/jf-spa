import React from 'react';
import {
  AppBar,
  CloseIcon,
  Dialog,
  DialogContent,
  IconButton,
  Toolbar,
  Typography,
  Slide,
} from '../wrappers/material-ui';
import { useStyles } from './modal.styles';

const Transition = React.forwardRef((
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) => <Slide direction="down" ref={ref} {...props} />);

export const Modal = ({
  open, onClose, title, children,
}) => {
  const classes = useStyles();

  return (
    <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DialogContent className={classes.content}>
        {children}
      </DialogContent>
    </Dialog>
  );
};
