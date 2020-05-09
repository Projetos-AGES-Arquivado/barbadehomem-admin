import React, { useState } from "react";

import {
  Edit,
  TabbedForm,
  FormTab,
  TextInput,
  DateInput,
  SelectInput,
} from "react-admin";

const BarberEditTitle = ({ record }) => {
  return <span>{record ? `${record.name}` : ""}</span>;
};

const BarberEdit = (props) => {
  return (
    <Edit {...props} title={<BarberEditTitle />} className="barber-list">
      <TabbedForm submitOnEnter={false}>
        <FormTab label="Perfil">
          <TextInput source="name" />
          <TextInput source="phone" />
          <DateInput source="birthday" />
          <SelectInput
            source="transport"
            choices={[
              { id: "Carro", name: "Carro" },
              { id: "Carro", name: "Moto" },
            ]}
          />
          <TextInput source="email" />
        </FormTab>

        <FormTab label="Endereço">
          <FormTab label="Endereço">
            <TextInput source="address.city" />
            <TextInput source="address.district" />
            <TextInput source="address.street" />
            <TextInput source="address.number" />
            <TextInput source="address.complement" />
          </FormTab>
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

export default BarberEdit;
