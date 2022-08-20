import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { FetchComponent } from '@/components/FetchComponent'
import { SomeComponent } from '@/components/SomeComponent'

const Home: NextPage = () => {
  // 強制的にSomeComponentをレンダリングさせるためのフラグ
  const [flag, setFlag] = useState(false)
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount((prev) => prev + 1)
  }, [flag])

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setFlag((flag) => !flag)}>レンダリング！</button>
      <SomeComponent someFlag={flag} count={count} />
      <FetchComponent />
    </div>
  )
}

export default Home
