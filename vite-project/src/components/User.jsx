import React from "react";

const User = ({ name, age }) => {
  return (
    <div>
      {/* {name} {age} */}
      {age > 22 ? (
        <h3>
          {name} {age}
        </h3>
      ) : (
        ""
      )}
    </div>
  );
};

export default User;
