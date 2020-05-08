import React, { useState } from "react";

import {
  Edit,
  TabbedForm,
  FormTab,
  TextInput,
  TextField,
  DateInput,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

const BarberEditTitle = ({ record }) => {
  return <span>{record ? `${record.name}` : ""}</span>;
};

export const BarberEdit = (props) => {
  const [id, setId] = useState(props.id);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState(Date);
  const [transport, setTransport] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit() {}

  return (
    <Edit {...props} title={<BarberEditTitle />} className="barber-list">
      <TabbedForm submitOnEnter={false}>
        <FormTab label="Perfil">
          <TextInput source="name" />
          <TextInput source="phone" />
          <DateInput source="birthday" />
          <TextInput source="transport" />
          <TextInput source="email" />
        </FormTab>

        <FormTab label="Endereço">
          <ReferenceManyField
            label=""
            reference="barbers_addresses"
            target="barberId"
          >
            <Datagrid>
              <TextField source="street" label="Rua" />
            </Datagrid>
          </ReferenceManyField>
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};
