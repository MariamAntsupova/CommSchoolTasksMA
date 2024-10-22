// 1.იპოვეთ ყველაზე გრძელი სიტყვა სტრინგში
// let str="The quick brown fox jumped over the lazy dog"
let str="The quick brown fox jumped over the lazy dog"
let splitedStr = str.split(" ");
console.log(splitedStr)
let sortedStrArr = splitedStr.sort((a,b)=>b.length-a.length)
console.log(`The longest word in the array is : "${sortedStrArr[0]}" and it's length is : ${sortedStrArr[0].length}`)



// 2.დააბრუნეთ დასორტირებული მასივი
// let str=["short", "medium", "longest", "tiny"]
let array=["short", "medium", "longest", "tiny"]

let newArray = array.sort((a,b)=>a.length-b.length)
console.log(newArray)