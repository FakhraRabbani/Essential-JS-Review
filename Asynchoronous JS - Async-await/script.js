async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await res.json();
  //console.log(data);
  return data;
}
const toDo = getTodos();
console.log(toDo);
console.log("jonas");
