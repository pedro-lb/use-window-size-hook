import React from 'react'
import { useMyHook } from 'use-window-size'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App