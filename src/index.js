import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import App from './App';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDWtOB1MPwlz3f801ANOFN-YHTuuOV_zCE",
  authDomain: "ourfamily-dd31a.firebaseapp.com",
  projectId: "ourfamily-dd31a",
  storageBucket: "ourfamily-dd31a.appspot.com",
  messagingSenderId: "901039374069",
  appId: "1:901039374069:web:e03589b1b3fb6817d04fbc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);