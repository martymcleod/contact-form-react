

function Textarea(props)
{

    const handleChange = (e) => {
        props.setMsgTxt(e.target.value)
    }

    return <div>
        <label>{props.label}</label>
        <textarea 
            name={props.name} 
            onChange={handleChange}
            >{props.value}</textarea>
    </div>
}

export default Textarea