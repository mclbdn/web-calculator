import { useEffect, useState } from 'react';
import './App.css';
import { Input } from './components/Input';
import { addHandler } from './utils/mathOperatorHandlers';

function App() {
  const [test, setTest] = useState(0)
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState(0);

  const addHandler = () => {
    setResult(Number(firstNumber) + Number(secondNumber));
  };


  const subHandler = () => {
    setResult(Number(firstNumber) - Number(secondNumber));
  };
  const divHandler = () => {
    setResult(Number(firstNumber) / Number(secondNumber));
  };
  const mulHandler = () => {
    setResult(Number(firstNumber) * Number(secondNumber));
  };

  const myHandler = (event) => {
    console.log(event.target.id)
    setTest(event.target.value)
    console.log(event.target)

  }

  return (
    <>
      <input type="text" value={test} onChange={myHandler} id='thisisid' />

      {/* <h1 class="text">First number</h1>
       <Input id="firstNum" o/> 



      
      <Input type="string" value={operator} onChange={setOperator} i={"myInput"} />
      
      <h1 style={{color:"white"}}>{operator}</h1>

       <h1 class="text">Second number</h1>
      <Input id="operator" /> 

      <br></br>
       <Button id="secondNum" /> 
      <button >Submit</button > */}

      <h1 className="text">First number</h1>
      <Input type="number" value={firstNumber} onChange={setFirstNumber} id={"myFirstNumber"} />



      <h1 className="text">Second number</h1>
      <Input type="number" value={secondNumber} onChange={setSecondNumber} id={"mySecondNumber"} />

      <button onClick={addHandler} type="button" className="myButton">+</button>
      <button onClick={subHandler} type="button" className="myButton">-</button>
      <button onClick={divHandler} type="button" className="myButton">/</button>
      <button onClick={mulHandler} type="button" className="myButton">*</button>
      {/* <h1>{result}</h1> */}
      {/* <h1>{result} ks</h1> */}
      <h1>{result > 3 ? "větší jak 3" : "menší jak 3"}</h1>
    </>


  );
}

export default App;
