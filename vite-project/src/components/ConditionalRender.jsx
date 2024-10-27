import React from "react";

const ConditionalRender = () => {
  const display =true;
  if (display) {
    return (
      <div>
        <h3>This is conditional component</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Code Everyday</h3>
      </div>
    );
  }
};

export default ConditionalRender;
