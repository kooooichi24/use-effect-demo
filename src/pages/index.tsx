import type { NextPage } from 'next'
import { useState } from 'react'
import { FetchComponent } from '@/components/FetchComponent'
import { SomeComponent } from '@/components/SomeComponent'

const Home: NextPage = () => {
  // 強制的にSomeComponentをレンダリングさせるためのフラグ
  const [_, setFlag] = useState(false)

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setFlag((flag) => !flag)}>レンダリング！</button>
      <SomeComponent />
      <FetchComponent />
    </div>
  )
}

export default Home
