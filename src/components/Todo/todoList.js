import { useStateValues } from "../context/stateValuesProvider";
import { useState } from "react";
import DeleteTask from "../deleteTask/deleteTask";
import EditTask from "../editTask/editTask";
import Completed from "../completed/completed";
import { styled } from "styled-components";

const Task = styled.div`
  display: flex;
  padding-left: 10px;
`;

const TodoList = () => {
    const { stateValues, setStateValues } = useStateValues();
  
    const [editingTasks, setEditingTasks] = useState({});
  
    const handleChange = (e, taskId) => {
      setEditingTasks((prevEditingTasks) => ({
        ...prevEditingTasks,
        [taskId]: e.target.value,
      }));
    };
  
    const handleSave = (taskId) => {
      if (editingTasks[taskId] !== undefined) {
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
    };
  
    const startEdit = (taskId) => {
      setEditingTasks((prevEditingTasks) => ({
        ...prevEditingTasks,
        [taskId]: stateValues.find((task) => task.id === taskId).name,
      }));
    };
  
    const renderTasks = (arr) => {
      return arr.map((item) => {
        if (!item.completed) {
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
                    <button onClick={() => handleSave(item.id)}>Save</button>
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
        }
        return null;
      });
    };
  
    const tasks = renderTasks(stateValues);
    return (
      <div className="main">
        <h3>Active</h3>
        {tasks}
      </div>
    );
  };
  
  export default TodoList;