import React, {useState, useEffect} from 'react'
import Modal from './Modal'
import db from './firebase'
import Comfeed from './Comfeed'
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import firebase from 'firebase';

const ComBox = () => {

    const [comment, setComment]= useState([]);
    const [d, setd]= useState('');
    const postComment = (e) =>{
        e.preventDefault(); 
        db.collection('comments').add({
            text: comment,
            username:"22ndSeaHawk",
            time: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setComment(" ");
        setComments(" ");
        console.log(comments[comments.length-1].text)
    }

    

    const [comments, setComments]= useState([]);
    
    useEffect(() => {
        db.collection("comments").orderBy("time", "asc").onSnapshot((snapshot) =>
          setComments(snapshot.docs.map((doc) => doc.data()))
        );

      }, []);

   




    const [isOpen, setIsOpen] = useState(false)

    return (
        <div  >
               <ChatBubbleOutlineIcon fontSize="small" onClick={() => setIsOpen(true)}/>
                 <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                 <form className='comment-input'>
                 <input            
                  onChange ={e=>setComment(e.target.value)} 
                  placeholder="Tweet your reply"
                  value={comment}
                  type='text' />   
                  <button className='btn' onClick={postComment} > Reply </button>  
                  </form>                   
                </Modal>
 
        </div>
        
    )
}

export default ComBox
