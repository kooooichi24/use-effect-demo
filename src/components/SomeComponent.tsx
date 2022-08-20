import { useEffect, useRef } from 'react'

type SomeComponentProps = {
  someFlag: boolean
}

export const SomeComponent = ({ someFlag }: SomeComponentProps) => {
  const count = useRef(0)
  useEffect(() => {
    someFlag && count.current++
  }, [someFlag])

  return <p>rendering count is {count.current}</p>
}
