import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './Components/Counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const onIncrement=()=>{
    if(count<10)
    setCount((prev)=>prev+1);
  }
  const onDecrement=()=>{
    if(count>0)
    setCount((prev)=>prev-1)
  }

  return (
    <>
      <Counter count={count} onIncrement={onIncrement} onDecrement={onDecrement}/>
    </>
  )
}

export default App
