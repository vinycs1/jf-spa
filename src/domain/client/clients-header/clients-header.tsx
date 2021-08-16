import React from 'react';
import { useStyles } from './clients-header.styles';
import { Button, TextField } from '../../../shared/wrappers/material-ui';
import { CLIENTS_HEADER_TEXTS } from './clients-header.constants';
import { Modal, useModal } from '../../../shared/modal';
import { ClientForm } from '../client-form';

export const ClientsHeader = () => {
  const styles = useStyles();
  const { open, setOpen } = useModal();

  return (
    <div className={styles.root}>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        {CLIENTS_HEADER_TEXTS.NEW_CLIENT}
      </Button>

      <TextField
        id="outlined-helperText"
        label="Buscar"
        variant="outlined"
        size="small"
      />
      <Modal open={open} onClose={() => setOpen(false)} title={CLIENTS_HEADER_TEXTS.NEW_CLIENT}>
        <ClientForm />
      </Modal>
    </div>
  );
};
