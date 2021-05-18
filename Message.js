import React from 'react'
import '../../styles/Message.css'
import { db,database } from '../../firebase'



    


const Message = () => {
    
    
    var a=[]
    var k=0;
    var ref = database.ref('myMessages');
    ref.on("value", function(snapshot){
    var d = snapshot.val();
    for(let i in d){
        
        a[k]=String(d[i].doc);
        a[k]=a[k]+"\n";
        a[k]=a[k]+"                                                                                         ";
        k++;
    }
})



    return (
        <div className="message">
           {
            <p>
                {a}
            </p>   
            
           }     
                
                   
            
        </div>
    )
}

export default Message