import React from 'react';
import {
  Edit,
  TabbedForm,
  FormTab,
  ReferenceField,
  TextField,
  DateField,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

import './styles.css';

const CustomerEditTitle = ({ record }) => {
  return <span>{record ? `${record.name}` : ''}</span>;
};

const CustomerEdit = props => {
  return (
    <Edit {...props} title={<CustomerEditTitle />} className="customer-list">
      <TabbedForm submitOnEnter={false}>
        <FormTab label="Perfil">
          <TextField source="name" />
          <TextField source="phone" />
          <DateField source="birthday" options={{ timeZone: 'UTC' }} />
          <TextField source="email" />
        </FormTab>

        <FormTab label="Endereço">
          <ReferenceField
            source="addressId"
            reference="users_addresses"
            link={false}
            label="Bairro"
          >
            <TextField source="district" />
          </ReferenceField>

          <ReferenceField
            source="addressId"
            reference="users_addresses"
            link={false}
            label="Rua"
          >
            <TextField source="street" />
          </ReferenceField>

          <ReferenceField
            source="addressId"
            reference="users_addresses"
            link={false}
            label="Número"
          >
            <TextField source="num" />
          </ReferenceField>

          <ReferenceField
            source="addressId"
            reference="users_addresses"
            link={false}
            label="Complemento"
          >
            <TextField source="complement" />
          </ReferenceField>
        </FormTab>

        <FormTab label="Observações" source="anotations">
          <RichTextInput
            source="observations"
            label="Obsevações"
            toolbar={false}
          />
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

export default CustomerEdit;
