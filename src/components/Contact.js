import Input from './Input'
import inputElement from '../elements/form-element'
import Textarea from './Textarea'
import '../contact.css'

const Contact = () => {

    
    return <div className="bg-red">
        {
         inputElement.map( elem => { 
       return  <Input value={elem.value} label={elem.label} />
        }) 
    }
    <Textarea name="message" value="Ecrivez votre message" label="message"/>
    <button>Envoyer</button>
    </div>
}

export default Contact;