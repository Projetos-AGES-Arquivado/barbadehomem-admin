import React from "react";

import {
  List,
  Datagrid,
  TextField,
  DateField,
  EmailField,
  EditButton,
} from "react-admin";

export const BarberList = (props) => (
  <List {...props} className="barber-list">
    <Datagrid>
      <TextField source="name" />
      <TextField source="phone" />
      <DateField source="birthday" locales="pt-BR" />
      <TextField source="transport" />
      <EmailField source="email" />

      <TextField source="address.street" />

      <EditButton label="Detalhes" />
    </Datagrid>
  </List>
);

export default BarberList;
