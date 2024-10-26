import React from 'react'

const Props = (props) => {
    console.log(props);  // props is object
    
  return (
    <div>
        <h1>
            {props.message} {props.name}
        </h1>
    </div>
  )
}

export default Props