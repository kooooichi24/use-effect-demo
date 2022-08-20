type SomeComponentProps = {
  someFlag: boolean
  count: number
}

export const SomeComponent = ({ someFlag, count }: SomeComponentProps) => {
  return <p>rendering count is {someFlag ? count * 2 : count}</p>
}
