import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyDP1vZQUN-FJvuiAnQJosxHvuqOhbROPK4',
//   authDomain: 'laundry-app-76d36.firebaseapp.com',
//   projectId: 'laundry-app-76d36',
//   storageBucket: 'laundry-app-76d36.appspot.com',
//   messagingSenderId: '240672305842',
//   appId: '1:240672305842:android:995b36f2596e3b6bfc0fab',
// };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
