import React,{useRef,useState} from 'react'
import firebase from 'firebase';
import Usericon from '../../images/professional-man.jpg'
import 'firebase/firestore'
import 'firebase/auth'
import '../../App.css'

import { useCollectionData } from 'react-firebase-hooks/firestore';

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

const Displaychat = () => {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
    
    return (
        <div className="flex flex-col">
            <div className="flex-1 h-customized overflow-y-scroll">
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)} 
                <span ref={dummy}></span>
            </div>
            <div className="flex-1">
            <form onSubmit={sendMessage}>
                <div className="chat-type-area h-1/6 px-2 py-3 flex items-center">
                    <input value={formValue} onChange={(e) => setFormValue(e.target.value)} className="w-full my-2 mr-4 px-4 py-2 rounded-md outline-none" type="text" placeholder="Type your message" />
                    <div className="submit w-8 h-8 cursor-pointer rounded-full bg-white hover:bg-gray-300 flex justify-center items-center">
                        <button type="submit" disabled={!formValue}><i className="fa fa-paper-plane cursor-pointer" aria-hidden="true" /></button>
                    </div>  
                </div>
            </form>
            </div>
        </div>
    )

    function ChatMessage(props) {
        const { text, uid } = props.message;
      
        const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
      
        return (<>
          <div className={`message ${messageClass}`}>
            <div className="p-6 flex">
            <img src={Usericon} className="w-8 h-8 rounded-full"/>
            <p className="mx-5 px-4 py-1 bg-blue-600 rounded-lg text-white">{text}</p>
            </div>
          </div>
        </>)
    }
}

export default Displaychat
