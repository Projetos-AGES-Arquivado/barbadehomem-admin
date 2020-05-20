import React from "react";

import {
  List,
  Datagrid,
  TextField,
  DateField,
  ChipField,
  NumberField,
  EditButton,
  ArrayField,
  ReferenceField,
} from "react-admin";

import "./styles.css";

import StatusInput from "../../components/StatusInput";

export const AppointmentList = (props) => {
  return (
    <List {...props} bulkActionButtons={false} sort={{ field: "status" }}>
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

        <StatusInput source="status" />

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
