
import Button from '../Button/Button'
import './App.css'
import { useState } from 'react'
import Container from '../Container/Container';



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
    
    
    </>
  );
}

export default App;