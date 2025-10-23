# 🗑️ Firebase Todo App (with Delete Functionality)

This project demonstrates a **Firebase Firestore-based Todo App** where
todos are dynamically added and deleted through JavaScript.\
It includes **real-time Firestore updates** and a **delete button**
implemented through JavaScript functions.

------------------------------------------------------------------------

## 🚀 Features

-   Add and delete todos in real time using Firebase Firestore.\
-   Delete button dynamically created via JavaScript.\
-   Real-time UI updates when todos are added or removed.\
-   Uses both `snapshot.docChanges()` and `snapshot.forEach()` for
    Firestore data handling.

------------------------------------------------------------------------

## 🧩 Key Functionalities Explained

### 1. **Delete Todo Button**

-   The delete button is dynamically added through JavaScript for each
    todo item.\
-   Each button is linked with a Firestore document ID to identify which
    todo should be deleted.

``` js
<button onclick="deleteTodo('${change.doc.id}')">Delete</button>
```

------------------------------------------------------------------------

### 2. **Global Delete Function**

-   The `deleteTodo` function is declared and initialized globally so it
    can be accessed from inline button calls.
-   Made global via `window.deleteTodo = deleteTodo`.

``` js
function deleteTodo(id) {
  console.log("Deleting todo with ID:", id);
  // Firestore delete logic here
}

window.deleteTodo = deleteTodo; // Makes function accessible globally
```

------------------------------------------------------------------------

### 3. **Receiving and Using the ID**

-   When the delete button is clicked, the document's `id` (from
    Firestore) is passed as a string argument to `deleteTodo(id)`.
-   Inside the function, the ID is logged and used to delete the
    document from Firestore.

------------------------------------------------------------------------

### 4. **Realtime Snapshot Listeners**

#### 🔹 `snapshot.docChanges()`

-   Brings only the documents that were **changed** --- either **added**
    or **deleted**.
-   Best used for handling incremental UI updates (e.g., adding or
    removing items dynamically).

``` js
snapshot.docChanges().forEach(change => {
  if (change.type === "added") {
    // Render new todo
  } else if (change.type === "removed") {
    // Remove todo from UI
  }
});
```

#### 🔹 `snapshot.forEach()`

-   Iterates through **all documents currently present** in the
    collection.
-   Recommended when rendering or refreshing the full list from
    Firestore.

``` js
snapshot.forEach(doc => {
  console.log(doc.id, "=>", doc.data());
});
```

------------------------------------------------------------------------

## ⚙️ Summary of Flow

1.  Firestore sends live snapshot updates.\
2.  `snapshot.docChanges()` detects changes (add/remove).\
3.  A delete button is dynamically created for each todo.\
4.  Button triggers `deleteTodo(id)` when clicked.\
5.  The function deletes the document with the received ID from
    Firestore.\
6.  UI updates automatically in real time.

------------------------------------------------------------------------

## 📚 Technologies Used

-   **Firebase Firestore**
-   **JavaScript (ES6+)**
-   **HTML / CSS**

------------------------------------------------------------------------

## 🧠 Notes

-   Always ensure your Firestore security rules allow deletion if you're
    testing locally.\
-   Prefer `snapshot.docChanges()` for performance in real-time apps.\
-   Keep global functions minimal --- use modular JS for cleaner code in
    production.
