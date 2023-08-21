import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useStateValues } from '../context/stateValuesProvider';

import  "./addtask.scss";

const AddTask = () => {
      const [taskName, setTaskName] = useState("")
      const {setStateValues} = useStateValues();


const changeValue = (e) => {
      setTaskName(e.target.value);
}

const addTask = (e) => {
    e.preventDefault();
    const newTask= {
          id: uuidv4(),
          name: taskName,
          completed: false
    }
    if(newTask.name === ""){
        return false
    }
    setStateValues((prevState)=> [...prevState, newTask]);
    setTaskName("")
}
  return (
        <div>
          <form>
            <input type="text" 
                   onChange={changeValue}
                   value={taskName}
                   />
            <button onClick={addTask}>Add Task</button>
          </form>
        </div>
        
  )
}
export default AddTask;