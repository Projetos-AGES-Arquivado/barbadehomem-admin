import 'firebase/app';
import { FirebaseDataProvider } from 'react-admin-firebase';

export const firebaseConfig = JSON.parse(
  process.env.REACT_APP_FIREBASE_CREDENTIALS
);

export const dataProvider = FirebaseDataProvider(firebaseConfig, {});
