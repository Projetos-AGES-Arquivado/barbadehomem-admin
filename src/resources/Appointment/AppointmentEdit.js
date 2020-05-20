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
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import "./styles.css";

const AppointmentEditTitle = ({ record }) => {
  return <span>{record ? `${record.name}` : ""}</span>;
};

export const AppointmentEdit = (props) => {
  return (
    <Edit {...props} title={<AppointmentEditTitle />}>
      <SimpleForm>
        <ReferenceField
          source="userId"
          reference="users"
          label="Cliente"
          link={false}
        >
          <TextField source="name" />
        </ReferenceField>

        <ReferenceInput source="barberId" reference="barbers" label="Barbeiro">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextField source="cost" />

        <SelectInput
          source="status"
          choices={[
            { id: "pending", name: "Em análise" },
            { id: "booked", name: "Agendado" },
            { id: "done", name: "Conluído" },
            { id: "canceled", name: "Cancelado" },
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};

export default AppointmentEdit;
