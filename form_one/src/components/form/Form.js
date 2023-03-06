import {useState} from 'react';
import ValueForm from '../valueForm/ValueForm';
import "./form.css";
const Form = () => {
      const [formValues, setFormValue] = useState([]);
      const [name, setName] = useState('');
      const [surename, setSurename] = useState('');
      const [email, setEmail] = useState('');
      const [showForm, setShowForm] = useState(true);

const handleSubmit = (e) => {
      e.preventDefault();
      setFormValue([...formValues, {name, surename, email}])
      setName("");
      setSurename("");
      setEmail("");
      setShowForm(false);
}
    return (
        <div className='form_initial'>
             {showForm ? (<form onSubmit={handleSubmit}>
                 <input type="text" name="name" 
                        placeholder='name' 
                        onChange={(e) => setName(e.target.value)}/>
                 <input type="text" name="surename" 
                        placeholder='surname' 
                        onChange={(e) => setSurename(e.target.value)}/>
                 <input type="email" name="email" 
                        placeholder='email' 
                        onChange={(e) => setEmail(e.target.value)}/>
                 <button>Add Form</button>
             </form>) : (<ValueForm valueForm={formValues}/>)} 
        </div>
    )
}
export default Form;