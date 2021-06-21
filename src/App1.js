import React, { useState, useEffect }  from 'react'
import { Button , FormControl, Paper, Select, TextField } from '@material-ui/core'
import "./style.css"
import Axios from 'axios'


const App1 = () => {
    const [text1, settext1] = useState(1)
    const [text2, settext2] = useState(1)
    const [country, setcountry] = useState([])
    const [country2, setcountry2] = useState([])
    const [value, setvalue] = useState(1)
    const [value2, setvalue2] = useState(1)
    useEffect(() => {
        getdata();
    }, [])
    async function getdata() {
        const result = await Axios.get("http://data.fixer.io/api/latest?access_key=ba65fbc49c9958efc6c9ed8b8e4c373b")
    console.log(result.data);
    setcountry(result.data.rates)
    setcountry2(result.data.rates)
    }
    function convert (e) {
        e.preventDefault();
        let num= (value2/value)*text1;
        settext2(num);
    }
    return (

        <div>
            <Paper className="paper">
                <h3>Currency Converter</h3>
                <form  onSubmit={convert} >
                    <div>
                        <TextField variant='outlined' value={text1 || " "} 
                        onChange={(e) => settext1(e.target.value)} autoComplete='off' />
                        <FormControl className="dropdown" variant='outlined'
                         onChange={(e) =>setvalue(e.target.value)}>

                        <Select native>
                             {Object.keys(country).map((value,index) =>
                             <option key={index} value={country[value]}>{value}</option>)}
                            </Select>
                        </FormControl>
                    </div>
                    <div>
                        <TextField variant='outlined' value={text2 || " "}  />
                        <FormControl className="dropdown" variant='outlined' onChange={(e) => setvalue2(e.target.value)}>

                            <Select native>
                            {Object.keys(country2).map((value,index) =>
                             <option key={index} value={country[value]}>{value}</option>)}
                            </Select>
                        </FormControl>
                    </div>
                    <Button type="submit" className="button" variant="contained">Convert</Button>
                </form>




            </Paper>
        </div>
    );
};



export default App1;