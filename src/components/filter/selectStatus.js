import { useStateValues } from "../context/stateValuesProvider";
import { useState } from "react";

const SelectStatus = ({selectFunction}) => {

    const changeOption = (e) => {
        const selectedValue = e.target.value;
        selectFunction(selectedValue)
    }
    return (
        <div>
            <select name="select"  
                    onChange={changeOption}>   
                   <option value="all">all</option>
                   <option value="active">active</option>
                   <option value="completed">completed</option>
            </select>
        </div>
          
    )
}
export default SelectStatus;