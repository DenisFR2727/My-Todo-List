import styled from "styled-components";
import { useStateValues } from "../context/stateValuesProvider";

const Edit = styled.div`
  margin-right: 5px;
`;

const EditTask = (props) => {
  const { startEdit } = props;

  const editTask = () => {
    startEdit(props.taskId);
  };

  return (
    <Edit>
      <button onClick={editTask}>Edit</button>
    </Edit>
  );
};

export default EditTask;