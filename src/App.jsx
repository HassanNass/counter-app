import './App.css'
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count > 0 ? count - 1 : 0);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="container">
      <h1>Counter App</h1>
      <p>{count}</p>
      <div className='buttons'>
        <button className="increment" onClick={handleIncrement}>Increment</button>
        <button className="decrement" onClick={handleDecrement}>Decrement</button>
        <button className="reset" onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

export default App