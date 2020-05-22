import React from 'react';

import {
  List,
  Datagrid,
  TextField,
  DateField,
  EmailField,
  EditButton,
} from 'react-admin';

export const BarberList = props => {
  return (
    <List {...props} className="barber-list" bulkActionButtons={false}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="phone" />

        <DateField
          source="birthday"
          locales="pt-BR"
          options={{ timeZone: 'UTC' }}
        />

        <TextField source="transport" />
        <EmailField source="email" />
        <EditButton label="Detalhes" />
      </Datagrid>
    </List>
  );
};

export default BarberList;
