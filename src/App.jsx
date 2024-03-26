import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css'

function App() {
  // state to hold value
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest] = useState(0)

  // Conditiona Render
  const [IsPrinciple, setIsPrinciple] = useState(true)
  const [IsRate, setIsRate] = useState(true)
  const [IsYear, setIsYear] = useState(true)



  const validate = (e) => {
    const { name, value } = e.target
    console.log(name);
    console.log(value);

    // Regular Expression
    // console.log(!!value.match(/^[0-9]*$/));  //!!-convert this expression to boolean
    if (!!value.match(/^[0-9]*$/)) {
      if (name == 'principle') {
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if (name == 'rate') {
        setRate(value)
        setIsRate(true)

      }
      else {
        setYear(value)
        setIsYear(true)
      }
    }
    else {
      if (name == 'principle') {
        setPrinciple(value)
        setIsPrinciple(false)
      }
      else if (name == 'rate') {
        setRate(value)
        setIsRate(false)
      }
      else {
        setYear(value)
        setIsYear(false)
      }
    }

  }
  // Function to  Reset button
  const handleReset = () => {
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
    setInterest(0)
  }

  // Function to calculate SI
  const handleCalculate = () => {
    setInterest((principle * rate * year) / 100)
  }

  return (
    <>
      <div className='main'>
        <div className="sub p-5">
          <h2>Simple Interest App</h2>
          <p>Calculate your simple interest easily!</p>
          <div className='result w-100 d-flex justify-content-center align-items-center rounded shadow mt-5 flex-column'>
            <h1>₹ {interest}</h1>
            <p>Total Simple Interest</p>
          </div>

          <form action="" className='mt-5'>
            <TextField id="outlined-basic" label="₹Principle Amount" variant="outlined" className='w-100 ' onChange={(e) => validate(e)} name='principle' value={principle || ""} />
            {!IsPrinciple && <p className='text-danger'>Invalid Input</p>}

            <TextField id="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined" className='w-100 mt-3' onChange={(e) => validate(e)} name='rate' value={rate || ""} />
            {!IsRate && <p className='text-danger'>Invalid Input</p>}

            <TextField id="outlined-basic" label="Year (yr)" variant="outlined" className='w-100 mt-3' onChange={(e) => validate(e)} name='year' value={year || ""} />
            {!IsYear && <p className='text-danger'>Invalid Input</p>}


            <div className='d-flex mt-4'>
              <Button onClick={handleCalculate} className='w-50 me-3 p-3' variant="contained" color="success" disabled={IsPrinciple && IsRate && IsYear ? false : true}>Calculate</Button>
              <Button onClick={handleReset} className='w-50 p-3' variant="outlined">Reset</Button>
            </div>
          </form>
        </div>

      </div>

    </>
  )
}

export default App
