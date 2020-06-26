import React from 'react';
import {
  Edit,
  TabbedForm,
  FormTab,
  TextInput,
  DateInput,
  SelectInput,
} from 'react-admin';
import { phoneParser } from '../utils';
import RichTextInput from 'ra-input-rich-text';

import './styles.css';

const BarberEditTitle = ({ record }) => {
  return <span>{record ? `${record.name}` : ''}</span>;
};

const BarberEdit = props => {
  return (
    <Edit {...props} title={<BarberEditTitle />} className="barber-list">
      <TabbedForm submitOnEnter={false}>
        <FormTab label="Perfil">
          <TextInput source="name" />
          <TextInput
            source="phone"
            parse={phoneParser}
            placeholder="(99) 99999-9999"
          />
          <DateInput source="birthday" />
          <SelectInput
            source="transport"
            choices={[
              { id: 'Carro', name: 'Carro' },
              { id: 'Carro', name: 'Moto' },
            ]}
          />
          <TextInput source="email" />

          <SelectInput
            source="isAvailable"
            label="Disponibilidade"
            choices={[
              { id: true, name: 'Disponível' },
              { id: false, name: 'Indisponível' },
            ]}
          />
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

export default BarberEdit;
