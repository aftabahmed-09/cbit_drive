import React from 'react'
import '../../styles/Chat.css'
import firebase from 'firebase'
import { storage, db } from '../../firebase'


const SendMessage = () =>{
    var x = document.getElementById("myText").value;
        db.collection('myMessages').add({
            
            x,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
}
const Chat = () => {
    return (
        <div>
            <div className="Chat__message">
                
            <input type="text" id="myText" name="myText" placeholder="Send your message" /><br></br>
            <button onClick={SendMessage} >Send</button>
            </div>
        </div>
    )
}

export default Chat
