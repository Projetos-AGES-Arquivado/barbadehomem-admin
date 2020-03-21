import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { firestore } from './plugins/firebase';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

setImmediate(async () => {
  // cria barbeiro
  await firestore.collection('barbers').add({
    name: 'Maria',
    age: 18
  });

  // lista barbeiros
  const result = await firestore.collection('barbers').get();
  const barbers = [];
  for (const doc of result.docs) {
    barbers.push(doc.data());
  }

  // pega barbeiro
  const result2 = await firestore
    .collection('barbers')
    .doc('s8ulDCqvaIkaAobSdOXx')
    .get();

  console.log(result2.data());

  // atualiza barbeiro
  await firestore
    .collection('barbers')
    .doc('s8ulDCqvaIkaAobSdOXx')
    .update({ isUpdated: true });

  console.log('atualizado');

  // remove barbeiro
  await firestore
    .collection('barbers')
    .doc('s8ulDCqvaIkaAobSdOXx')
    .delete();

  console.log('deletado');
  
  // pega localização
  navigator.geolocation.getCurrentPosition((position) => {
    console.log('my position ', position);
  });
});
