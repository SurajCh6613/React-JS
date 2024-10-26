// Map is funtion which allows to loop through every element i  array

export default function Fruits() {
    const fruits = ["Banana","Apple","Mango","Orange","Pine Apple"]
    return (
        <div>
            {
                fruits.map(fruit=><li key={fruit}>{fruit}</li>)
            }
        </div>
    )
}