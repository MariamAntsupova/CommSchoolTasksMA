// Task 1: 
// დაწერეთ ფუნქცია -randomNumber(min, max) ორი პარამატრით და დააბრუნეთ რენდომ მნიშვნელობები min და max შორის
// randomNumber(1, 10); 

function randomNumber(...nums){
   nums.sort((a,b)=> a-b);
   console.log(Math.floor(Math.random() * (nums.slice(-1) - (nums[0])-1))+nums[0]+1);
}

randomNumber(1 , 10)