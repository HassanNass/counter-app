import { useState } from "react"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Counter App</h1>
      <p>{count}</p>
      <button className="increment" onClick={() => setCount(count + 1)}>Increment</button>
      <button className="decrement" onClick={() => setCount(count - 1)}>Decrement</button>
      <button className="reset" onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default App