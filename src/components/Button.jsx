export default function Button(props){
    return(
        <button onClick = {props.clickEvent} className={props.btnClass}>{props.btnName}</button>
    )
}