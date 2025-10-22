import {
    db,
    doc,
    setDoc,
    getDoc,
    collection,
    addDoc,
    increment
} from "./firebase.js"


const list = document.getElementById("list")

const addTodo = async () => {
    const todo = document.getElementById("todo");

    let ref = collection(db, "billbord");
    await addDoc(ref, {
        id: increment(1),
        todo: todo.value
    })

    // list.innerHTML += `<li>${todo.value}</li>`
    // console.log("-> todo.value", todo.value)
    console.log("Todo added successfully")
    todo.value = "";
}
alert("Firebase Firestore connected successfully")

const addTodoBtn = document.getElementById("addTodoBtn")
addTodoBtn.addEventListener("click", addTodo)