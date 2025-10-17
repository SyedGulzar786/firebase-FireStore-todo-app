const list = document.getElementById("list")

const addTodo = () => {
const todo = document.getElementById("todo");
list.innerHTML += `<li>${todo.value}</li>`

console.log("-> todo.value", todo.value)
}

const addTodoBtn = document.getElementById("addTodoBtn")
addTodoBtn.addEventListener("click", addTodo)