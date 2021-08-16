import React from 'react';
import { Table } from '../../../shared/table';
import { CLIENTS_MOCK } from '../client.mock';

export const Clients = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  return (
    <Table
      columns={[
        {
          id: 'name',
          label: 'Nome',
        }, {
          id: 'phoneNumber1',
          label: 'Telefone 1',
        }, {
          id: 'phoneNumber2',
          label: 'Telefone 2',
        },
      ]}
      data={CLIENTS_MOCK}
    />
  );
};
