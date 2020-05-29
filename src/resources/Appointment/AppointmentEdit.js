import React from 'react';

import {
  TextField,
  ReferenceField,
  Edit,
  SelectInput,
  ReferenceInput,
  Toolbar,
  SaveButton,
  TabbedForm,
  FormTab,
  NumberField,
} from 'react-admin';

import { KeyboardDateTimeInput } from '@sklinet/react-admin-date-inputs';

import ServicesField from '../../components/ServicesField';

import './styles.css';

const AppointmentEditTitle = ({ record }) => {
  return <span>{record ? `${record.name}` : ''}</span>;
};

const AppointmentEditToolbar = props => (
  <Toolbar {...props}>
    <SaveButton label="Salvar" redirect="list" submitOnEnter={false} />
  </Toolbar>
);

export const AppointmentEdit = props => {
  return (
    <Edit undoable={false} {...props} title={<AppointmentEditTitle />}>
      <TabbedForm toolbar={<AppointmentEditToolbar />}>
        <FormTab label="Atendimento">
          <ReferenceField
            source="userId"
            reference="users"
            label="Cliente"
            link={false}
          >
            <TextField className="customer-input" source="name" />
          </ReferenceField>

          <ReferenceField
            source="userId"
            reference="users"
            label="Contato"
            link={false}
          >
            <TextField className="customer-input" source="phone" />
          </ReferenceField>

          <ReferenceInput
            source="barberId"
            reference="barbers"
            label="Barbeiro"
          >
            <SelectInput optionText="name" />
          </ReferenceInput>

          <KeyboardDateTimeInput
            source="date"
            label="Agendado para"
            options={{
              format: 'dd/MM/yyyy, HH:mm',
              ampm: false,
              clearable: true,
            }}
          />

          <SelectInput
            source="status"
            choices={[
              { id: 'pending', name: 'Em análise' },
              { id: 'booked', name: 'Agendado' },
              { id: 'done', name: 'Concluído' },
              { id: 'canceled', name: 'Cancelado' },
            ]}
          />
        </FormTab>

        <FormTab label="Serviços">
          <NumberField
            source="cost"
            options={{ style: 'currency', currency: 'BRL' }}
          />

          <ServicesField source="services" />
        </FormTab>

        <FormTab label="Endereco">
          <ReferenceField
            source="addressId"
            reference="users_addresses"
            label="Rua"
            link={false}
          >
            <TextField source="street" />
          </ReferenceField>
          <ReferenceField
            source="addressId"
            reference="users_addresses"
            label="Bairro"
            link={false}
          >
            <TextField source="district" />
          </ReferenceField>
          <ReferenceField
            source="addressId"
            reference="users_addresses"
            label="Número"
            link={false}
          >
            <TextField source="num" />
          </ReferenceField>
          <ReferenceField
            source="addressId"
            reference="users_addresses"
            label="Complemento"
            link={false}
          >
            <TextField source="complement" />
          </ReferenceField>
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

export default AppointmentEdit;
