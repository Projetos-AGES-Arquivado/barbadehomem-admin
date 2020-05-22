import React from 'react';

import {
  List,
  Datagrid,
  TextField,
  DateField,
  EmailField,
  EditButton,
} from 'react-admin';

import './styles.css';

export const CustomerList = props => {
  return (
    <List
      {...props}
      className="customer-list"
      bulkActionButtons={false}
      filter={{ isAdmin: false }}
    >
      <Datagrid>
        <TextField source="name" />
        <TextField source="phone" />

        <DateField
          source="birthday"
          locales="pt-BR"
          options={{ timeZone: 'UTC' }}
        />

        <EmailField source="email" />
        <EditButton label="Detalhes" />
      </Datagrid>
    </List>
  );
};

export default CustomerList;
