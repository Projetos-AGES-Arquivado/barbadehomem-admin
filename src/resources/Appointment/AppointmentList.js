import React from "react";

import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  ReferenceField,
} from "react-admin";

import "./styles.css";

import StatusField from "../../components/StatusField";

export const AppointmentList = (props) => {
  return (
    <List {...props} bulkActionButtons={false} className="appointment-list">
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
          options={{ timeZone: "UTC" }}
        />

        <EditButton label="Detalhes" />
      </Datagrid>
    </List>
  );
};

export default AppointmentList;
