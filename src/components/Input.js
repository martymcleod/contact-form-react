

function Input(props)
{
    return <div>
        <label>  {props.label} :</label>
        <input type={props.type || 'text'} name={props.name} value={props.value} />
    </div>
}

export default Input