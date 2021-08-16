import React from 'react';
import { TextField, TextsFieldRow } from '../../../shared/fields';
import { FormControl } from '../../../shared/wrappers/material-ui';

export const ClientForm = () => (
  <FormControl>
    <TextField
      id="name"
      label="Nome"

    />

    <TextsFieldRow>
      <TextField
        id="phoneNumber1"
        label="Telefone 1"
      />
      <TextField
        id="phoneNumber2"
        label="Telefone 2"
      />
    </TextsFieldRow>

    <TextField
      id="street"
      label="Endereço"
    />

    <TextsFieldRow>
      <TextField
        id="number"
        label="Numero"
      />
      <TextField
        id="complement"
        label="Complemento"
      />
    </TextsFieldRow>

    <TextField
      id="cep"
      label="Cep"
    />
    <TextField
      id="district"
      label="Bairro"
    />
    <TextField
      id="city"
      label="Cidade"
    />

    <TextField
      id="email"
      label="E-mail"
    />

    <TextField
      id="cpf"
      label="Cpf"
    />

    <TextField
      id="cnpj"
      label="Cnpj"
    />

    <TextField
      id="notes"
      label="Notas"
    />

  </FormControl>
);
