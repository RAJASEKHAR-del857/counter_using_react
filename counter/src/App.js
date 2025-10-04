import Container from './Container'
import Button from './Button'
import './App.css'
import { useState } from 'react'
  



function App () {
  const [Score, setScore ] = useState(0);
 
  function increment(amount) {
  setScore(prev => prev + amount);
}

  return (
  <>
  <div className="score-page">
    <Container score={Score}/>
    </div>
    <Button input="+1" onClick={() => increment(1)} />
    <Button input="+5" onClick={() => increment(5)} />
    
    </>
  );
}

export default App;