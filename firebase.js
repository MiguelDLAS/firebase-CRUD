 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { 
     getFirestore,
     collection, 
     addDoc,
     getDocs,
 } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCQaOWgSz49Nz5AA1hmL2WTzKaPy6mA_uQ",
   authDomain: "fir-javascript-crud-f2162.firebaseapp.com",
   projectId: "fir-javascript-crud-f2162",
   storageBucket: "fir-javascript-crud-f2162.appspot.com",
   messagingSenderId: "413864041879",
   appId: "1:413864041879:web:c83da1ce380ec91b1ff8d2"
 };

 // Initialize Firebase
 export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));