// 1.მოცემული მასივში უნდა წაშალოთ დუბლიკატი აიდები
// const data = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 1, name: 'Charlie' },
//   { id: 3, name: 'David' },
//   { id: 2, name: 'Eve' },
// ];

// შედეგად უნდა ბრუნდებოდეს ესე:
// [
//   { id: 1, name: 'Charlie' },
//   { id: 3, name: 'David' },
//   { id: 2, name: 'Eve' }
// ]

const data = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Charlie' },
  { id: 3, name: 'David' },
  { id: 2, name: 'Eve' },
];
const myMap = new Map();
data.forEach(element => {
    myMap.set(element.id , element)
});
const myArr =[...myMap.values()] ;

console.log(myArr)
