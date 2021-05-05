import CardForm from './components/cardForm/CardForm';
import Card from './components/card/Card';

import {useState} from 'react'

import './app.css';

function App() {
  const [flipStatus, setFlipStatus] = useState(false)
  const [cardHolder, setCardHolder] = useState('Baki')
  const [cardNumber, setCardNumber] = useState('')
  const [cardProvider, setCardProvider] = useState('discover')
  const [cvv, setCvv] = useState('')
  const [cardMonth, setCardMonth] = useState('MM')
  const [cardYear, setCardYear] = useState('YY')

  const [itemFocus, setItemFocus] = useState(null)
  

  return (
    <div className="App">
      <Card 
        flipStatus={flipStatus}
        cardProvider={cardProvider}
        cardHolder={cardHolder}
        cardNumber={cardNumber}
        cvv={cvv}
        cardMonth={cardMonth}
        cardYear={cardYear}
        itemFocus={itemFocus} />
      <CardForm 
        setFlipStatus={setFlipStatus}
        flipStatus={flipStatus} 
        setCardProvider={setCardProvider}
        setCardHolder={setCardHolder} 
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        setCvv={setCvv}
        setCardMonth={setCardMonth}
        setCardYear={setCardYear}
        setItemFocus={setItemFocus} />
    </div>
  );
}

export default App;
