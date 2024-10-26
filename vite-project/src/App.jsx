import React from 'react'
import Hello from './components/Hello'

const App = () => {
  return (
    <div>
      {/* Component use */}
      <Hello /> 

      {/* Component Re-usability */}
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}

export default App