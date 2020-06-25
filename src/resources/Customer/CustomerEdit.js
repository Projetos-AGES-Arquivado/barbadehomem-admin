import React from 'react';
import { Edit, TabbedForm, FormTab, TextField, DateField } from 'react-admin';
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
