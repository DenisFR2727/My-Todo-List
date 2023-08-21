import TodoList from "./components/Todo/todoList";
import AddTask from "./components/addTask/addTask";
import CompletedList from "./components/completed/completedList";
import { StateValuesProvider } from "./components/context/stateValuesProvider";
import styled from "styled-components";
import GlobalStyle from "./components/style/globalStyle";


const AppWrapper = styled.div`
 
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  
      .content_app{
        text-align: center;
        width: 1000px;

      li {
        list-style: none;
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
       
      div{
        max-width: 800px;
        overflow: hidden; /* Приховати вміст, який виходить за межі */
        text-overflow: ellipsis; /* Додати маркер "..." для неповного вмісту */
        white-space: nowrap;
         }
      
      } 
      }
`;

function App() {
  return (
    <StateValuesProvider>
      <GlobalStyle />
      <AppWrapper>
      <div className="App">
            <div className='content_app'>
                <h1>ToDoList</h1>
                <AddTask />
                <TodoList />
                <CompletedList />
            </div>
      </div>
      </AppWrapper>
    </StateValuesProvider>
  );
}

export default App;
