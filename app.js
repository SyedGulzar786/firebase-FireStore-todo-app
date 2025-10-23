import {
    db,
    doc,
    setDoc,
    getDoc,
    collection,
    addDoc,
    increment,
    onSnapshot,
    deleteDoc,
    updateDoc,
    serverTimestamp,
    query,
    where,
    orderBy
} from "./firebase.js"


const list = document.getElementById("list")

const addTodo = async () => {
    const todo = document.getElementById("todo");

    let ref = collection(db, "todos");
    await addDoc(ref, {
        id: increment(1),
        todo: todo.value,
        timestamp: serverTimestamp()
    })

    // list.innerHTML += `<li>${todo.value}</li>`
    // console.log("-> todo.value", todo.value)
    console.log("Todo added successfully")
    todo.value = "";
}
// alert("Firebase Firestore connected successfully")

const addTodoBtn = document.getElementById("addTodoBtn")
addTodoBtn.addEventListener("click", addTodo)

// let getTodos = () => {
//     onSnapshot(collection(db, "todos"), (snapshot) => {
//         let todos = [];
//         snapshot.forEach((doc) => {
//             // console.log("Document data: ", doc.id, doc.data());
//             todos.push({...doc.data(), docId : doc.id});
//         });
//         console.log("Todos: ", todos); 
//     });
// };

// getTodos();


let getTodos = () => {
    let q = query(collection(db, "todos"), where("id", "==", 10), orderBy("timestamp","desc"))
    onSnapshot(q, (snapshot) => {
        // console.log(snapshot)
        list.innerHTML = "";
        snapshot.docChanges().forEach((change) => {
            // console.log("change", change)
            // let { todo } = change.doc.data();
            // list.innerHTML += `<li>${todo} <button onclick="deleteTodo('${change.doc.id}')">Delete</button> </li>`
            // console.log("change", change.doc.data())
            console.log("change", change.type)
        })
        // snapshot.forEach((doc) => {
        // let { todo } = doc.data();
        // list.innerHTML += `<li>${todo}</li>`
        // });
        snapshot.forEach((doc) => {
            let { todo, timestamp } = doc.data();
            console.log("timestamp", new Date(timestamp.toDate()));
            list.innerHTML += `<li>${todo} <button onclick="deleteTodo('${doc.id}')">Delete</button> <button onclick="updateTodo('${doc.id}')">Update</button> </li>`
        })
    });
};
getTodos();

const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
    console.log("Todo deleted successfully");
    // console.log("Delete todo with id:", id);
}

window.deleteTodo = deleteTodo;

let updateTodo = async (id) => {

    const todo = document.getElementById("todo");

    await updateDoc(doc(db, "todos", id), {
        todo: todo.value
    })
    todo.value = "";
    todo.innerHTML = "";
    console.log("Todo updated successfully");
    console.log("Update todo with id:", id);
}

window.updateTodo = updateTodo; 