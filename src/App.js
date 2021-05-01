import CardForm from './components/cardForm/CardForm';
import Card from './components/card/Card';

import {useState} from 'react'

import './app.css';

function App() {
  const [flipStatus, setFlipStatus] = useState(false)
  return (
    <div className="App">
      <Card flipStatus={flipStatus} />
      <CardForm setFlipStatus={setFlipStatus} flipStatus={flipStatus} />
    </div>
  );
}

export default App;
