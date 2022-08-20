import { useEffect, useState } from 'react'

type SomeComponentProps = {
  someFlag: boolean
}

export const SomeComponent = ({ someFlag }: SomeComponentProps) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount((prev) => prev + 1)
  }, [someFlag])

  return <p>rendering count is {someFlag ? count * 2 : count}</p>
}
