import React, {useState, useEffect} from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import {SearchOutlined} from '@material-ui/icons'
import Chatbar from './Chatbar';
import db from './firebase'
import {useStateValue} from "./StateProvider";


const Sidebar = () => {

    const [{user}, dispatch] = useStateValue();
    const [rooms, setRooms]=useState([])

     
 
    useEffect(() => {
         const unsubscribe=db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),               
                }
            )
            ))
        ));
        
        return () => {
            unsubscribe();
        }
    },[]); 
   
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
               <Avatar src={user.photoURL} />
               <div className='sidebar-header-right'>
                   <IconButton>
                   <DonutLargeIcon/>
                   </IconButton>
                   <IconButton>
                   <ChatIcon/>
                   </IconButton>
                   <IconButton>
                   <MoreVertIcon/>
                   </IconButton>
               </div>
            </div>
            <div className='sidebar-search'>
                <div className='sidebar-searchContainer'>
                     <SearchOutlined/>
                     <input placeholder="start a new chat" type='text'/>
                </div>    
            </div>
            <div className='sidebar-chatlist'>
            <Chatbar addChat/>
                {rooms.map(room=> (
                    <Chatbar key={room.id} id={room.id} name={room.data.name}/>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
