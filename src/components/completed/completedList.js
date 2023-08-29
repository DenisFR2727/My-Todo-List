import { useStateValues } from "../context/stateValuesProvider";
import DeleteTask from "../deleteTask/deleteTask";
import Completed from "./completed";
import styled from "styled-components";

const ColorCompleted = styled.div`
      color: green;
`
const CompletedTask = styled.ul`
      padding-left: 0px;
`

const CompletedList = () => {
    const { stateValues } = useStateValues();

const renderCompletedList = (arr) => {
      const completedList = arr.map(task => {
      return  task.completed === true ?
            <li key={task.id}>
                <Completed 
                   taskId={task.id}
                   completed={task.completed} 
                />
                <ColorCompleted>{task.name}</ColorCompleted>  
                <DeleteTask taskId={task.id}/>
            </li>
        : null
           
      })
      return <CompletedTask>{completedList}</CompletedTask>
}
const completed  = renderCompletedList(stateValues);
    return (
         <div>
            <h3>Completed</h3>
           {completed} 
         </div>)
}
export default CompletedList;