import React from 'react';
import { Edit, TabbedForm, FormTab, TextInput, NumberInput } from 'react-admin';
import { formatValue } from '../utils';

const BarberEditTitle = ({ record }) => {
  return <span>{record ? `${record.name}` : ''}</span>;
};

const ServiceEdit = props => {
  return (
    <Edit {...props} title={<BarberEditTitle />} className="barber-list">
      <TabbedForm submitOnEnter={false}>
        <FormTab label="Perfil">
          <TextInput source="titleService" />
          <TextInput source="description" />
          <NumberInput parse={formatValue} source="cost" />
          <TextInput source="duration" />
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

export default ServiceEdit;
