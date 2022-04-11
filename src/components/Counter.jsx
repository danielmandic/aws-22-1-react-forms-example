import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(42)

  const countUp = () => {
    setCount(count + 1)
  }

  const countDown = () => {
    setCount(count - 1)
  }

  const clear = () => {
    setCount(0)
  }

  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={countUp}>count up</button>
      <button onClick={countDown}>count down</button>
      <button onClick={clear}>Clear</button>
    </div>
  )
}

export default Counter
