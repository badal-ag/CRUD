import { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import './App.css';

function App() {

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {

    await addDoc(usersCollectionRef, {name: newName, age: Number(newAge)}).then( res=> {
      alert("New User Added Successfully! Refresh the Page to See the Latest List.");
    }).catch(err=> alert("Oops! User not Added. Kindly Try Again."));

  };

  const updateUser = async (id, age) => {

    const userDoc = doc(db, "users", id);
    const newFields = {age: age + 1}
    await updateDoc(userDoc, newFields).then(res => {
      alert('Age Increased Successfully! Refresh the Page to See the Latest List.');
    }).catch(err => alert("Age not Changed. Kindly Try Again."));

  };

  const deleteUser = async (id) => {

    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc).then(res => {
      alert('User Deleted Successfully! Refresh the Page to See the Latest List.');
    }).catch(err => alert("User not Deleted. Kindly Try Again."));


  };

  useEffect(() => {

    const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getUsers();
  }, [])

  return (
    <div className="App">

      <input type="text" placeholder='Enter Name' onChange={(event) => {setNewName(event.target.value); }}/>
      <input type="number" placeholder='Enter Age' onChange={(event) => {setNewAge(event.target.value); }}/>
      <button onClick={createUser}>Create New User</button>
      <button><a href='https://github.com/badal-ag' target='_blank'>Visit Github</a></button>

      {users.map((user) => {
        return (
          <div>
            {" "}
            <h1>Name: {user.name} </h1>
            <h1>Age: {user.age} </h1>
            <button onClick={() => { updateUser(user.id, user.age) }}>Increase Age by 1</button>
            <button onClick={() => { deleteUser(user.id) }}>Delete User</button>
          </div>
        );
      })}
      
    </div>
  );
}

export default App;
