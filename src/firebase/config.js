import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD5mlN5uAHbhAK_LQ_bFM9Wb6ncxg1Cmpw',
  authDomain: 'fitness-tracker-7affe.firebaseapp.com',
  projectId: 'fitness-tracker-7affe',
  storageBucket: 'fitness-tracker-7affe.appspot.com',
  messagingSenderId: '919322488309',
  appId: '1:919322488309:web:1513a9fdb7e458e27444bc',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
