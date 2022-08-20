type SomeComponentProps = {
  count: number
}

export const SomeComponent = ({ count }: SomeComponentProps) => {
  return <p>rendering count is {count}</p>
}
