import React from "react";
import "./App.css";
import AddItem from "./components/addItems/AddItems";
import DateTodo from "./components/date/Date.js";

function App() {
  return (
    <div className="todo">
        <div className="date">
           <h3>ADD ITEM</h3>
           <div><DateTodo /></div>
        </div>
        <div className="line_add"></div>
        <AddItem />
        <div className="completed_list">
        </div>
        
    </div>
  );
}

export default App;
