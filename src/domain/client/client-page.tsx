import React from 'react';
import { Box } from '../../shared/wrappers/material-ui';
import { Clients } from './clients';
import { ClientsHeader } from './clients-header';

export const ClientPage = () => (
  <Box>
    <ClientsHeader />
    <Clients />
  </Box>
);
