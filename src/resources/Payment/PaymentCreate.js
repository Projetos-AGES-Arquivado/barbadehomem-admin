import React from 'react'

import {
  Create,
  TextInput,
  FormTab,
  TabbedForm,
} from 'react-admin'

const PaymentCreate = props => {
  return (
    <Create {...props}>
      <TabbedForm redirect="list">
        <FormTab label="Adicionar Pagamento">
          <TextInput source="method" />
        </FormTab>
      </TabbedForm>
    </Create>
  )
}

export default PaymentCreate