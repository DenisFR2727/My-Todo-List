import React, { createContext, useContext, useState, useEffect } from 'react';

const StateValuesContext = createContext();

export const StateValuesProvider = ({ children }) => {
    const [stateValues, setStateValues] = useState(() => {
        const storedData = localStorage.getItem('tasks');
        return storedData ? JSON.parse(storedData) : [];
      });
    const [isEdit, setIsEdit] = useState(false);
    const [taskId, setTaskId] = useState("");

 
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(stateValues));
  }, [stateValues]);

  return (
    <StateValuesContext.Provider value={{ stateValues, setStateValues, isEdit, setIsEdit,taskId, setTaskId }}>
      {children}
    </StateValuesContext.Provider>
  );
};

export const useStateValues = () => {
  return useContext(StateValuesContext);
};