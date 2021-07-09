import React from 'react'
import { useState, useEffect } from 'react'
import './Chatbar.css'
import { Avatar } from '@material-ui/core'
import db from './firebase'
import { Link} from 'react-router-dom';

import {useStateValue} from "./StateProvider";

function Chatbar ({addChat, name, id}) {

       const [messages, setMessages]= useState(" ")
       const [seed, setSeed]=useState("")
       const [{user}, dispatch] = useStateValue();

       useEffect(() => {
        if(id){
            db.collection('rooms').doc(id).collection('messages')
            .orderBy('timestamp','desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            })
        }
    }, [id]);


       useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));        
    }, []);

    const createChat=()=>{
          const room=prompt("add new chat");
          if(room){
              db.collection('rooms').add({
                  name: room,
                  user: user.email
              })
          }
    } 

    return !addChat ?(

        <Link to ={`/rooms/${id}`}>
        <div className='sidebar-chat'>
               <Avatar  src={`https://avatars.dicebear.com/api/initials/${seed}.svg`}/>
             <div className='sidebar-chat-info'>
                <h2>  {name}</h2>
                <p>{messages[0]?.message}</p>
             </div>
                   
        </div>
        </Link>
    ):(
        <div onClick={createChat} className='sidebar-chat'>
            <h2> Add New Chat</h2>
        </div>
    )
}

export default Chatbar
