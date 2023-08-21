import "./valueform.css"
import { v4 as uuidv4 } from 'uuid';

const ValueForm = (props) => {

    return (<div>
            <div className="value_form_list">{props.valueForm.map((item) => {
                 return ( <ul key={uuidv4()}>
                    <li>
                       Name: {item.name}
                    </li>
                    <li>
                       SureName: {item.surename} 
                    </li>
                    <li>
                       Email: {item.email}
                    </li>
                 </ul>)
             })}</div>
    </div>)
}
export default ValueForm;