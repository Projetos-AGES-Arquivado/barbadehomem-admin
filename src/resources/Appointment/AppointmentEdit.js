import React from "react";

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
} from "react-admin";

import { KeyboardDateTimeInput } from "@sklinet/react-admin-date-inputs";

import ServicesField from "../../components/ServicesField";

import "./styles.css";

const AppointmentEditTitle = ({ record }) => {
  return <span>{record ? `${record.name}` : ""}</span>;
};

const AppointmentEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton label="Salvar" redirect="list" submitOnEnter={false} />
  </Toolbar>
);

export const AppointmentEdit = (props) => {
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
            <TextField className="name-input" source="name" />
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
              format: "dd/MM/yyyy, HH:mm",
              ampm: false,
              clearable: true,
            }}
          />

          <SelectInput
            source="status"
            choices={[
              { id: "pending", name: "Em análise" },
              { id: "booked", name: "Agendado" },
              { id: "done", name: "Concluído" },
              { id: "canceled", name: "Cancelado" },
            ]}
          />
        </FormTab>

        <FormTab label="Serviços">
          <TextField source="cost" />

          <ServicesField source="services" />
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

export default AppointmentEdit;
