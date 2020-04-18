import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { dataProvider } from './providers/firebase-provider';
import { i18nProvider } from './providers/i18n-provider';

const App = () => (
  <Admin dataProvider={dataProvider} i18nProvider={i18nProvider}>
    <Resource name="users" list={ListGuesser} />
  </Admin>
);

export default App;
