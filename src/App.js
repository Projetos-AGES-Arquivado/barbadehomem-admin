import React from 'react';
import { Admin, Resource } from 'react-admin';
import { dataProvider } from './providers/firebase-provider';
import { i18nProvider } from './providers/i18n-provider';
import { authProvider } from './providers/auth-provider';

import Login from './resources/Login';
import Barber from './resources/Barber';
import Appointment from './resources/Appointment';
import Customer from './resources/Customer';
import Payment from './resources/Payment'
import Services from './resources/Services'

const App = () => (
  <Admin
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    authProvider={authProvider}
    loginPage={Login}
  >
    <Resource name="appointments" {...Appointment} />
    <Resource name="users" {...Customer} />
    <Resource name="barbers" {...Barber} />
    <Resource name="barbers_addresses" />
    <Resource name="users_addresses" />
    <Resource name="payment_methods" {...Payment}/>
    <Resource name="services" {...Services} />
  </Admin>
);

export default App;
