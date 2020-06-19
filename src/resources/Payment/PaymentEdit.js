import React from 'react'
import {
  Edit,
  TabbedForm,
  FormTab,
  TextInput,
} from 'react-admin'

const PaymentEdit = props => {
  return (
    <Edit {...props}>
      <TabbedForm submitOnEnter={false}>
        <FormTab label="Editar pagamento">
          <TextInput source="method" />
        </FormTab>
      </TabbedForm>
    </Edit>
  )
}

export default PaymentEdit