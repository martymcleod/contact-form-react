

function Textarea(props)
{
    return <div>
        <label>{props.label}</label>
        <textarea name={props.name}>{props.value}</textarea>
    </div>
}

export default Textarea