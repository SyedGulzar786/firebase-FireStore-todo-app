import {
    db,
    doc,
    setDoc,
    getDoc,
    collection,
    addDoc,
    increment,
    onSnapshot
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
// alert("Firebase Firestore connected successfully")

const addTodoBtn = document.getElementById("addTodoBtn")
addTodoBtn.addEventListener("click", addTodo)

let getTodos = () => {
    onSnapshot(collection(db, "todos"), (snapshot) => {
        snapshot.forEach((doc) => {
            console.log("Document data: ", doc.id, doc.data());
        });
    });
};

getTodos();