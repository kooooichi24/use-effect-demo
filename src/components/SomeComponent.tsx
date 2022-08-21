import { useEffect, useState } from 'react'

export const SomeComponent = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `title ${Math.random()}`
  })

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>click!!</button>
    </div>
  )
}
