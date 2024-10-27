import React from "react";

const ConditionalRender = () => {
  const display =false;

//   1. Method 
//   if (display) {
//     return (
//       <div>
//         <h3>This is conditional component</h3>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h3>Code Everyday</h3>
//       </div>
//     );
//   }

// 2. Method
    // let message;
    // if(display){
    //     message = 
    // }
    // else{
    //     message = <h1>This is message 2</h1>
    // }

    // 3. Method
    return    display?<h1>This is message 1</h1>:<h1>This is message 2</h1>

};

export default ConditionalRender;
