import React from 'react'
import Hello from './components/Hello'
import Props from './components/Props'
import Map from './components/Map'
import ConditionalRender from './components/ConditionalRender'

const App = () => {
  const seatNumbers = [1,4,7]  // Array
  const person = {
    name:"Suraj",
    message:"Hi",
    seatNumbers:[1,4,7],
  }
  return (
    <div>
      {/* Component use */}
      <Hello /> 

      {/* Component Re-usability */}
      {/* <Hello />
      <Hello />
      <Hello /> */}

      {/* Props in react - Its like a parameter in function*/}
      {/* <Props name="Suraj" message="Hi"/>
      <Props name="Rahul" message="Hi" seatNumbers={seatNumbers}/> */}
      <Props person={person}/>

      <Map />  

      <ConditionalRender />

    </div>
  )
}

export default App