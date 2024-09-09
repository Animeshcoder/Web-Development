import { useState } from 'react'
import './App.css'
import Display from './components/Display'

function App() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <>
    <button onClick={increment}>Increment</button>
    <Display count={count}/>
    {count >= 5 && <button onClick={decrement}>Decrement</button>}
    </>
  )
}

export default App
