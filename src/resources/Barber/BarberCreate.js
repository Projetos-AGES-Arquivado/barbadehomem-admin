import React from 'react';
import {
  Create,
  DateInput,
  TextInput,
  SelectInput,
  FormTab,
  TabbedForm,
} from 'react-admin';
import { phoneParser } from '../utils';

import './styles.css';

const BarberCreate = props => {
  return (
    <Create {...props}>
      <TabbedForm redirect="list">
        <FormTab label="Perfil">
          <TextInput source="name" />
          <TextInput source="email" type="email" />

          <TextInput
            source="phone"
            parse={phoneParser}
            placeholder="(99) 99999-9999"
          />

          <DateInput source="birthday" />

          <SelectInput
            source="transport"
            choices={[
              { id: 'Carro', name: 'Carro' },
              { id: 'Moto', name: 'Moto' },
            ]}
          />
        </FormTab>
        <FormTab label="Endereço">
          <TextInput source="address.city" />
          <TextInput source="address.district" />
          <TextInput source="address.street" />
          <TextInput source="address.number" type="number" />
          <TextInput source="address.complement" />
        </FormTab>
      </TabbedForm>
    </Create>
  );
};

export default BarberCreate;
