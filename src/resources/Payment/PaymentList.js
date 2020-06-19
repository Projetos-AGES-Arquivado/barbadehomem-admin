import React from 'react'

import {
  List,
  Datagrid,
  TextField,
  EditButton,
} from 'react-admin'

const PaymentList = props => {
  return (
    <List {...props} bulkActionButtons={false}>
      <Datagrid>
        <TextField source="method" />
        <EditButton label="Detalhes" />
      </Datagrid>
    </List>
  )
}

export default PaymentList