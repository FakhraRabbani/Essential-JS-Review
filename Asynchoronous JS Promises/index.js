//console.log(fetch("https://jsonplaceholder.typicode.com/todos/"));
//This is a pending promise

//Promise States
//1. Pending State -> When doing something
//2. Rejected -> If there is error
//3. Fulfilled -> data successfully arrived

//this then statement first one also returns a promise
console.log(
  fetch("https://jsonplaceholder.typicode.com/todos/")
    .then((res) => res.json())
    .then((data) => console.log(data))
);

console.log("jonas");
