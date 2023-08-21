import { useStateValues } from "../context/stateValuesProvider";
import DeleteTask from "../deleteTask/deleteTask";
import EditTask from "../editTask/editTask";
import Completed from "../completed/completed";
import { styled } from "styled-components";

const Task = styled.div`
  display: flex;
  padding-left: 10px;
  /* justify-content: space-between;
  align-items: center; */
`;

const TodoList = () => {
    const { stateValues } = useStateValues();

const renderTasks = (arr) => {
      const list = arr.map((item,id) => {
           if(!item.completed) {
            return <li key={id}>
                     <Completed  
                        taskId={item.id}
                        completed={item.completed}
                      />
                      <div>{item.name}</div>
                     <div>
                         <Task>
                            <EditTask />
                            <DeleteTask taskId={item.id}/>
                         </Task>
                     </div>
                  </li>
            }
         return null
      })

      return <ul>{list}</ul>
}
const tasks = renderTasks(stateValues)
    return(
        <div className="main">
            <h3>Active</h3>            
            {tasks}
        </div>  
    )
}
export default TodoList;
