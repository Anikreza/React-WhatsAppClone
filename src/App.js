import React, {useState, useEffect} from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import Login from './Login'
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import {useStateValue} from './StateProvider';
import db from './firebase';

function App() {
  
 
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    if(user){
      db.collection('users').doc(user.uid).set({
        user: user.email,
        token: user.refreshToken 
      })
    }
  }, [])
  

  return (
    <div className="app"> 
        {!user? (
          <Login/>
        ):(

         <div className="app-container">
          <Router>

                 <Sidebar/>
                 <Switch>
                   <Route path="/rooms/:roomId">
                     <Chat/>
                   </Route>
                   <Route path="/">
                     <h1></h1>
                   </Route>              
                 </Switch>            
           
            </Router>       
         </div>
        )}
     
          
    </div>
  );
}

export default App;
