import React,{useState,useEffect} from 'react'
import './App.css';
import { Button,FormControl,Input,InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase'
import firebase from 'firebase'

function App() {
const[todos,setTodo]= useState([]);
const[input ,setInput]=useState('')

useEffect(() => {
  //snapshot.docs.map(doc=>{doc.data()}) returns an array of object
  //snapshot.docs.map(doc=>{doc.data().todo}) return array of strings where todo is a key
  db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot=>{
    setTodo(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
  })//Every single time database chages fetch
  
},[])

const addTodo=(e)=>{
          e.preventDefault();
          db.collection('todos').add({todo:input,
          timestamp:firebase.firestore.FieldValue.serverTimestamp()//Timestamp of firebase server
        }) // add to collection todos in firebase
         //setTodo([...todos,input]);
         setInput('');
}

  return (
    <div className="App">

<form className="form">
  <h2>Write Your To-Do</h2>
<FormControl>
  <InputLabel >Write a Todo</InputLabel>
  <Input value={input} onChange={e=>{setInput(e.target.value)}} />
  
</FormControl>
      
      {/* Form on submission refreshes the page so state is lost ,
      to prevent it e.preventDEafult() is used to prevent refreshing*/}
         
         {/* disabled={!input}   disable a button nif input is blank*/ }
         <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}>Add todo</Button>
      </form>
     

     <ul >
        <h4>Your_List</h4>
       {todos.map((task)=>{
         return(<Todo todo={task}/>)
       })}
       
       
     </ul>
   
    </div>
  );
}

export default App;
