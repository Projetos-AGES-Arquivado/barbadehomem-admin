import React from 'react';
import {
  Create,
  TextInput,
  NumberInput,
  FormTab,
  TabbedForm,
} from 'react-admin';
import { formatValue } from '../utils';

import './styles.css';

const ServiceCreate = props => {
  return (
    <Create {...props}>
      <TabbedForm redirect="list">
        <FormTab label="Novo Serviço">
          <TextInput source="titleService" />
          <TextInput source="description" />
          <NumberInput parse={formatValue} source="cost" />
          <TextInput source="duration" />
        </FormTab>
      </TabbedForm>
    </Create>
  );
};

export default ServiceCreate;
