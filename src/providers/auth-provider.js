import 'firebase/auth';

import * as firebase from 'firebase/app';
import { firebaseConfig } from './firebase-provider';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export const authProvider = {
  login: async ({ email, password }) => {
    const authResult = await auth.signInWithEmailAndPassword(email, password);
    const docUser = await firestore
      .collection('users')
      .doc(authResult.user.uid)
      .get();
    if (docUser.exists && docUser.get('isAdmin')) {
      return authResult.user;
    }
    throw new Error('Permissão insuficiente');
  },

  logout: () => {
    return auth.signOut();
  },
  checkError: error => {
    throw error;
  },
  getPermissions: async () => [],
  checkAuth: async () => {
    const user = auth.currentUser;
    if (user) {
      return user;
    }
    throw new Error('Digite o seu login e senha');
  },
};
