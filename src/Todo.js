// rfce cntr +space
import React,{useState} from 'react'
import db from './firebase'
import './Todo.css'
import { List,ListItem,ListItemText,Modal,Button } from '@material-ui/core';
//import {DeleteForeverIcon} from '@material-ui/icons'
 import {Delete} from '@material-ui/icons'



function Todo(props) {
    const [open ,setOpen]=useState(false);
    const [input,setInput]=useState('');
    const updateTodo=()=>{
           db.collection('todos').doc(props.todo.id).set({
               todo:input
           },{merge:true});
           setOpen(false);
    }
    return (<React.Fragment>
        <Modal open={open}//state tells if modal is open
               onClose={e=>setOpen(false)}>{/*This is function*/ }
          <div >
              <h1>Modal</h1>
              <input placeholder={props.todo.todo} value={input} onChange={event=>setInput(event.target.value)}/>
              <Button onClick={updateTodo}>Update Todo</Button>{/*Bpdy of modal*/ }
          </div>
        </Modal>
        <List className="todo__list">
            
            <ListItem>
                 <ListItemText  secondary="" primary={props.todo.todo}/>
                 
            </ListItem>
            <hr/>
            <Button onClick={e=>setOpen(true)} variant="contained">Edit</Button>
            <Delete onClick={event=>{db.collection('todos').doc(props.todo.id).delete()}}/>
 
        </List>
        </React.Fragment>
    )
}

export default Todo
