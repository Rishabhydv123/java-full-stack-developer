import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import { myStore } from './Redux/Store.js';

console.log('myStore:', myStore);
console.log('myStore: this is from main.jsx', myStore.getState());

createRoot(document.getElementById('root')).render(
  <>
    <App />
  </>
);