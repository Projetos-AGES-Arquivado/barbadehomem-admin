import React from 'react';

import {
  List,
  Filter,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  ReferenceField,
  SelectInput,
  DateInput,
} from 'react-admin';

import './styles.css';

import StatusField from '../../components/StatusField';

const AppointmentFilter = props => (
  <Filter {...props}>
    <SelectInput
      source="status"
      choices={[
        { id: 'pending', name: 'Em análise' },
        { id: 'booked', name: 'Agendado' },
        { id: 'done', name: 'Concluído' },
        { id: 'canceled', name: 'Cancelado' },
      ]}
      alwaysOn
    />
  </Filter>
);

export const AppointmentList = props => {
  return (
    <List
      {...props}
      filters={<AppointmentFilter />}
      bulkActionButtons={false}
      className="appointment-list"
    >
      <Datagrid>
        <ReferenceField
          source="userId"
          reference="users"
          link={false}
          label="Cliente"
        >
          <TextField source="name" />
        </ReferenceField>

        <ReferenceField
          source="barberId"
          reference="barbers"
          link={false}
          label="Barbeiro"
        >
          <TextField source="name" />
        </ReferenceField>

        <StatusField source="status" sortBy="status" />

        <DateField
          source="date"
          locales="pt-BR"
          options={{ timeZone: 'UTC' }}
        />

        <EditButton label="Detalhes" />
      </Datagrid>
    </List>
  );
};

export default AppointmentList;
