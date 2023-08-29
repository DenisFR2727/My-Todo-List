import { useStateValues } from "../context/stateValuesProvider";
import { useState,useEffect, useCallback } from "react";
import DeleteTask from "../deleteTask/deleteTask";
import EditTask from "../editTask/editTask";
import Completed from "../completed/completed";
import { styled } from "styled-components";
import SelectStatus from "../filter/selectStatus";

const Task = styled.div`
  display: flex;
  padding-left: 10px;
`;

const TodoList = () => {
    const { stateValues, setStateValues } = useStateValues();
    const [editingTasks, setEditingTasks] = useState({});
    const [isEditing, setIsEditing] = useState(false); 
    const [option, setOption] = useState("all");
    const { isSelect, setIsSelect } = useStateValues();

    const handleChange = (e, taskId) => {
      setEditingTasks((prevEditingTasks) => ({
        ...prevEditingTasks,
        [taskId]: e.target.value,
      }));
    };
    useEffect(() => {
        // Перевіряємо, чи є значення в editingTasks, що вимагає редагування
        const hasEditingTask = Object.values(editingTasks).some(value => value !== undefined);
        setIsEditing(hasEditingTask);
      }, [editingTasks]);

    const handleSave = (taskId) => {
      const editedText = editingTasks[taskId].trim();
      if (editingTasks[taskId] !== undefined && editedText !== "") {
        if(editedText !== ""){
            const newTasks = stateValues.map((task) => {
                if (task.id === taskId) {
                 
                  return { ...task, name: editingTasks[taskId] };
                }
                return task;
              });
              setStateValues(newTasks);
              setEditingTasks((prevEditingTasks) => ({
                ...prevEditingTasks,
                [taskId]: undefined,
              })); 
              
        }
      }
    };
  
    const startEdit = (taskId) => {
      setEditingTasks((prevEditingTasks) => ({
        ...prevEditingTasks,
        [taskId]: stateValues.find((task) => task.id === taskId).name,
      }));
    };
  
    const renderTasks = (arr) => {
      return arr.filter((todo) => {
        if(option === "all"){
           return true
        }
        else if(option === "active"){
           
           return !todo.completed 
        }
        else if(option === "completed"){
          
           return  todo.completed;
        }
    }).map((item) => {
          return (
            <li key={item.id}>
              <Completed taskId={item.id} completed={item.completed} />
              <div>
                {editingTasks[item.id] !== undefined ? (
                  <div>
                    <input
                      type="text"
                      value={editingTasks[item.id]}
                      onChange={(e) => handleChange(e, item.id)}
                    />
                    <button onClick={() => handleSave(item.id)} 
                            disabled={!isEditing}>Save</button>
                  </div>
                ) : (
                  <div>{item.name}</div>
                )}
              </div>
              <div>
                <Task>
                  <EditTask
                    taskId={item.id}
                    startEdit={() => startEdit(item.id)}
                  />
                  <DeleteTask taskId={item.id} />
                </Task>
              </div>
            </li>
          );
        
        
      });
    };
const  changeSelect = useCallback((childValue) => {
    setOption(childValue)
},[setOption])

    const tasks = renderTasks(stateValues);
    return (
      <div className="main">
        <h3>Active</h3>
        <SelectStatus selectFunction={changeSelect}/>
        <div>{tasks}</div>    
      </div>
    );
  };
  
  export default TodoList;