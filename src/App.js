import CardForm from './components/cardForm/CardForm';
import Card from './components/card/Card';

import {useState} from 'react'

import './app.css';

function App() {
  const [flipStatus, setFlipStatus] = useState(false)
  const [cardHolder, setCardHolder] = useState('Baki')
  const [cardNumber, setCardNumber] = useState('#### #### #### ####')

  const [itemFocus, setItemFocus] = useState(null)
  

  return (
    <div className="App">
      <Card 
        flipStatus={flipStatus}
        cardHolder={cardHolder}
        cardNumber={cardNumber}
        itemFocus={itemFocus} />
      <CardForm 
        setFlipStatus={setFlipStatus}
        flipStatus={flipStatus} 
        setCardHolder={setCardHolder} 
        setCardNumber={setCardNumber}
        setItemFocus={setItemFocus} />
    </div>
  );
}

export default App;
