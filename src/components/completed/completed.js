import { useStateValues } from "../context/stateValuesProvider";


const Completed = (props) => {
const {stateValues, setStateValues} = useStateValues();

const moveTaskToCompleted = (taskId, completed) => {
    const updatedTasks = stateValues.map((task) =>
      task.id === taskId ? { ...task, completed } : task
    );

    setStateValues(updatedTasks);
  };

  const handleCheckboxChange = (e) => {
    const newCompletedValue = e.target.checked;
    moveTaskToCompleted(props.taskId, newCompletedValue);
  };
    return (
        <div>
            <input type="checkbox"
                   checked={props.completed}
                   onChange={handleCheckboxChange} />
        </div>
    )
}
export default Completed