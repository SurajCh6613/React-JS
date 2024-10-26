// Map is funtion which allows to loop through every element i  array

export default function Fruits() {
  const fruits = ["Banana", "Apple", "Mango", "Orange", "Pine Apple"];
  const Users = [
    {
      name: "Suraj",
      age: 23,
    },
    {
      name: "Sahul",
      age: 22,
    },
    {
      name: "Rahul",
      age: 23,
    },
    {
      name: "Amit",
      age: 23,
    },
    {
      name: "Ranjeet",
      age: 20,
    },
  ];
  return (
    <div>
      {/* Rendering Array using Map function */}
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
      {/* Rendering Object using Map function */}
      {Users.map((user) => (
        <li key={user.name}>
          {user.name} {user.age}
        </li>
      ))}

      {/* Rendering Component using Map function */}
      {}
    </div>
  );
}
