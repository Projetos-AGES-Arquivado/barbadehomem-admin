import React from 'react';
import { Edit, TabbedForm, FormTab, TextInput, NumberInput } from 'react-admin';
import { formatValue } from '../utils';

const PromotionEdit = props => {
  return (
    <Edit {...props} title="Promoções">
      <TabbedForm submitOnEnter={false}>
        <FormTab label="Promoção Relâmpago"></FormTab>

        <FormTab label="Promoção Mensal"></FormTab>
      </TabbedForm>
    </Edit>
  );
};

export default PromotionEdit;
