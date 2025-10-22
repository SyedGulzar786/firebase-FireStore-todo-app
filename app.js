import {
    db,
    doc,
    setDoc,
    getDoc,
    collection,
    addDoc,
    increment
} from "./firebase"


const list = document.getElementById("list")

const addTodo = () => {
    const todo = document.getElementById("todo");

    let ref = collection(db, "todos");
    addDoc(ref, {
        id: increment(1),
        todo: todo.value
    })

        list.innerHTML += `<li>${todo.value}</li>`
    console.log("-> todo.value", todo.value)
}

const addTodoBtn = document.getElementById("addTodoBtn")
addTodoBtn.addEventListener("click", addTodo)