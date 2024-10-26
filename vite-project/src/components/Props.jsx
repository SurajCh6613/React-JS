import React from 'react'

// // Normal method
// const Props = (props) => {
//     console.log(props);  // props is object
    
//   return (
//     <div>
//         <h1>
//             {props.message} {props.name}
//         </h1>
//     </div>
//   )
// }

// // De-structuring Props Method
// const Props = (props)=>{
//     const {name,message} = props; // De-structuring props
//     return(
//         <div>
//             <h1>
//                 {message} {name}
//             </h1>
//         </div>
//     )

// }

// Another De-structuring method
const Props = ({name,message}) =>{
    return(
        <div>
            <h1>
            {message} {name}
            </h1>
        </div>
    )
}

export default Props