import { dataProvider } from "../../providers/firebase-provider";

import React, { useState } from "react";
import "./styles.css";

import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  ImageField,
  DateField,
  ArrayField,
  DeleteButton,
  ShowButton,
  Container,
  Show,
  SimpleShowLayout,
  FileField,
  UrlField,
  ReferenceManyField,
  SingleFieldList,
  ChipField,
  EmailField,
  TabbedShowLayout,
  Tab,
  InputField,
  DateInput,
  SaveButton,
  TabbedForm,
  FormTab,
  CreateButton,
  TopToolbar,
  Button,
  Toolbar,
  CardActions,
} from "react-admin";

export const BarberList = (props) => (
  <List {...props} className="barber-list">
    <Datagrid>
      <TextField source="name" />
      <TextField source="phone" />
      <DateField source="birthday" locales="pt-BR" />
      <TextField source="transport" />
      <EmailField source="email" />

      <EditButton label="Detalhes" />
    </Datagrid>
  </List>
);

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

export const BarberCreate = (props) => {
  function handleRegister() {
    alert("entrei aqui");
  }

  return (
    <Create {...props}>
      <TabbedForm>
        <FormTab label="Perfil">
          <TextInput source="name" />
          <TextInput source="email" />
          <DateInput source="birthday" />
          <TextInput source="phone" placeholder="(99) 99999-9999" />
          <TextInput source="transport" />
        </FormTab>

        <FormTab label="Endereço">
          <TextInput source="street" label="Rua" />
          <TextInput source="city" label="Cidade" />
          <TextInput source="district" label="Bairro" />
        </FormTab>
      </TabbedForm>
    </Create>
  );
};
