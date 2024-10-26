import React from 'react'
import Hello from './components/Hello'
import Props from './components/Props'

const App = () => {
  return (
    <div>
      {/* Component use */}
      <Hello /> 

      {/* Component Re-usability */}
      <Hello />
      <Hello />
      <Hello />

      {/* Props in react - Its like a parameter in function*/}
      <Props name="Suraj" message="Hi"/>
      <Props name="Rahul" message="Hi"/>
    </div>
  )
}

export default App