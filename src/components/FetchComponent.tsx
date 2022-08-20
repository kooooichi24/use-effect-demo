import axios from 'axios'
import { useEffect, useState } from 'react'

export const FetchComponent = () => {
  const [data, setData] = useState({
    subscribers: 0,
    stars: 0
  })

  // ここでuseEffectを使ってstar数を取得してみましょう!
  useEffect(() => {
    console.log('called useEffect callback')
    ;(async () => {
      const response = await axios.get('https://api.github.com/repos/facebook/react')
      setData({ subscribers: response.data.subscribers_count, stars: response.data.stargazers_count })
    })()
  }, [])

  return (
    <div>
      <p>ここにReactのGitHubレポジトリに付いたスターの数を表示してみよう</p>
      <p>{data.stars} stars</p>
    </div>
  )
}
