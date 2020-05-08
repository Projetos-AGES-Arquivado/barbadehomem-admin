import React from "react";
import {
  Create,
  DateInput,
  TextInput,
  SelectInput,
  FormTab,
  TabbedForm,
} from "react-admin";

const BarberCreate = ({ createda_at, props }) => {
  return (
    <Create {...props}>
      <TabbedForm redirect="../barbers_addresses/:id">
        <FormTab label="Perfil">
          <TextInput source="name" />
          <TextInput source="email" type="email" />
          <TextInput source="phone" />
          <DateInput source="birthday" />

          <SelectInput
            source="transport"
            choices={[
              { id: "car", name: "Carro" },
              { id: "motorcycle", name: "Moto" },
            ]}
          />
        </FormTab>
        <FormTab label="Endereço">
          <TextInput source="address.city" />
          <TextInput source="address.district" />
          <TextInput source="address.street" />
          <TextInput source="address.number" />
        </FormTab>
      </TabbedForm>
    </Create>
  );
};

export default BarberCreate;
