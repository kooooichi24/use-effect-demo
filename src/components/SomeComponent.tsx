type SomeComponentProps = {
  someFlag: boolean
}

export const SomeComponent = ({ someFlag }: SomeComponentProps) => {
  return <p>ここに、このコンポーネントがレンダリングされた回数を表示してみよう!</p>
}
