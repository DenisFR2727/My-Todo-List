import {useState,useEffect} from 'react';

import {Container} from 'react-bootstrap';
import './App.css';

const Convertor = () => {
    const [usdRate, setUsdRate] = useState(null);
    const [eurRate, setEurRate] = useState(null);

    const [value, setValue] = useState({
        usd: '',
        eur: '',
      });
    const [convert, setConvert] = useState({
        usd: null,
        eur: null,
      });
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchApiGet = async () =>{
        try{
            const response = await  fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json");
            const data = await response.json();
            console.log('7877')
            setUsdRate(data[24].rate)
            setEurRate(data[31].rate)
        }catch(error){
           setError('Error fetching exchange rates')
        }
       
      } 
        fetchApiGet()
    },[])
    useEffect(() => {
        const storedNameUsd = localStorage.getItem('sumUSD');
        const storedNameEur = localStorage.getItem('sumEUR');
        if (storedNameUsd) {
          setValue((prev) => ({
            ...prev,
            usd: storedNameUsd,
          }));
        }
        if (storedNameEur) {
          setValue((prev) => ({
            ...prev,
            eur: storedNameEur,
          }));
        }
    },[])
    const handleValueChange = (e) => {
        const { name, value: newValue } = e.target;
        setValue((prev) => ({
          ...prev,
          [name]: newValue,
        }));
        localStorage.setItem(`sum${name.toUpperCase()}`, newValue);
      };
    const handleConversion = () => {
            const resultUSD = value.usd * usdRate;
            const resultEUR = value.eur * eurRate;
        if (isNaN(resultUSD) || isNaN(resultEUR)) {
            setError('Please enter a valid number');
         return;
        }
            setConvert({
                usd: resultUSD.toFixed(2),
                eur: resultEUR.toFixed(2),
            });
            setError(null);
   }

    if(error){
        return <div>{error}</div>
    }
    return (
        
        <Container>
           
            <div className="app">
                <h1>Convertor</h1>
                <div>USD: {usdRate} / EUR: {eurRate}</div>
                <form className='form_conversion' action="" onSubmit={(e) => e.preventDefault()}>
                    <div className='result'>
                       <input value={value.usd} name="usd" onChange={handleValueChange} type="number" placeholder='USD/UAH'/>
                       <div className='result_amount'>result: {convert.usd} UAH</div>
                    </div>
                    <div className='result'>
                       <input value={value.eur} name="eur" onChange={handleValueChange} type="number" placeholder='EUR/UAH'/>
                       <div className='result_amount'>result:  {convert.eur} UAH</div>
                    </div>
                    <button onClick={handleConversion}>Conversion</button>
                </form>
            </div>
        </Container>
    )
}
function App() {
  return (
            <Convertor/>  
  );
}
export default App;
