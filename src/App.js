import { useState, useEffect} from 'react';
import { db } from './firebase-config';
import { collection } from "firebase/firestore";
import './App.css';

function App() {

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  useEffect(() => {

    const getUsers = async () => {
        
    }

    getUsers();

  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
