import React from 'react';
import { Edit, TabbedForm, FormTab, TextInput, NumberInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const PromotionEdit = props => {
  return (
    <Edit {...props} title="Promoções">
      <TabbedForm submitOnEnter={false}>
        <FormTab label="Promoção">
          <RichTextInput source="content" label="Obsevações" toolbar={false} />
        </FormTab>
      </TabbedForm>
    </Edit>
  );
};

export default PromotionEdit;
