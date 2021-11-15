import Input from './Input'
import '../contact.css'

function Contact()
{
    const value = "votre nom"
    const label = "Nom"

    const inputElement = [{
        label: 'nom',
        value: 'Votre nom'

    }, {
        label: 'email',
        value: 'Votre email'

    },  ]
    
 

    return <div className="bg-red">
        {
         inputElement.map( elem => { 
       return  <Input value={elem.value} label={elem.label} />
        }) 
    }
    </div>
}

export default Contact;