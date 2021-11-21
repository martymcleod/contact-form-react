import { useEffect, useState } from "react";

import Input from './Input'
import inputElement from '../elements/form-element'
import Textarea from './Textarea'
import Message from './Message'
import '../contact.css'

const Contact = () => {

const [msgTxt, setMsgTxt] = useState('Entrez votre message')

const messageHandler =

useEffect(() => {
    console.log(msgTxt)
     
}, [msgTxt])
    return <div className="bg-red">
        {
         inputElement.map( elem => { 
       return  <Input key={elem.id} value={elem.value} label={elem.label} />
        }) 
    }
    

    <Textarea 
         
        name="message" 
        value={msgTxt} 
        setMsgTxt={setMsgTxt}
        label="message"/>
    <button>Envoyer</button>
     <Message message={msgTxt}/>
    </div>
}

export default Contact;