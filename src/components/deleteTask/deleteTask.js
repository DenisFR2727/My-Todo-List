import { useStateValues } from "../context/stateValuesProvider";

const DeleteTask = (props) => {
    const { stateValues, setStateValues } = useStateValues(props);

const deleteTask = () => {
    const deleteTask =  stateValues.filter(item => item.id !== props.taskId)
    setStateValues(deleteTask); 
}    
    return (
        <div>
            <button onClick={deleteTask}>Delete</button>
        </div>
    )
}
export default DeleteTask;