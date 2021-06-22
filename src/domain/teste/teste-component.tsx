import React from 'react';
import { Button } from 'react-bootstrap';
import { useTeste } from './teste';

export const Teste = () => {
  const { doTeste } = useTeste();

  return (
    <Button onClick={() => doTeste()}> Teste</Button>
  );
};
