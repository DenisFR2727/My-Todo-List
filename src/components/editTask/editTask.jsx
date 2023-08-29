import styled from "styled-components";

const Edit = styled.div`
  margin-right: 5px;
`;

const EditTask = (props) => {
  const { startEdit } = props;
// функція належить цьому компоненту
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