import React from 'react'
import '../../styles/Chat.css'
import firebase from 'firebase'
import { db ,database} from '../../firebase'
import Message from './Message'

var ref = database.ref('myMessages');
var x;
const SendMessage = () =>{
    x = document.getElementById("myText").value;
    var data = {
        doc:x,
        //timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        
    }
    ref.push(data);
        /*db.collection('myMessages').add({
            
            doc:x,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            
        });*/
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
