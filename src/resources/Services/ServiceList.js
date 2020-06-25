import React from 'react';

import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EmailField,
  EditButton,
  CreateButton,
  TopToolbar,
} from 'react-admin';

import './styles.css';

const ListActions = ({ basePath, props }) => {
  return (
    <TopToolbar {...props}>
      <CreateButton basePath={basePath} />
      <EditButton
        basePath="promotions/g5Cb8vpd5LOJV36uYPYi"
        label="Promoção Relâmpago"
      />

      <EditButton
        basePath="promotions/3ayzIWl3zPblLp3Re2z7"
        label="Promoção Mensal"
      />
    </TopToolbar>
  );
};

export const ServiceList = props => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      className="service-list"
      actions={<ListActions />}
    >
      <Datagrid>
        <TextField source="titleService" />
        <TextField source="description" />
        <NumberField
          source="cost"
          options={{ style: 'currency', currency: 'BRL' }}
        />
        <NumberField source="duration" />

        <EditButton label="Detalhes" />
      </Datagrid>
    </List>
  );
};

export default ServiceList;
