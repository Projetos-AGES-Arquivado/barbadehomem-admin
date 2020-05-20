import React from 'react';

import {
  List,
  Datagrid,
  TextField,
  DateField,
  ChipField ,
  NumberField,
  EditButton,
  ArrayField,
} from 'react-admin';

export const RequestList = (props) => {
  return (
    <List {...props} className='barber-list'>
      <Datagrid>
        <NumberField  source='cost'/>
        <TextField source="barberId" label="Barbeiro"/>  {/* buscar barbeiro (?) */}
        <DateField
          source='date'
          showTime
          locales='pt-BR'
          // options={{ timeZone: 'UTC' }} comentado pra ficar com hora igual ao banco
        />
        {/* <SingleFieldList>
          <ChipField  source="services" />
        </SingleFieldList> */}
        {/* <SingleFieldList source="services">a</SingleFieldList> */}


        <TextField source="services"/> {/* formatar OU arranjar outra forma de mostrar os servicos = RETORNA ['Corte','Barba'] */}
        <TextField source="status" />
        <TextField source="userId" /> {/* buscar usuario (?) */}
        <EditButton label='Detalhes' />
      </Datagrid>
    </List>
  );
};

export default RequestList;
