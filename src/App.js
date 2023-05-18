import { useEffect, useState } from "react";
import "./App.css";
import { mathHandler, addHandler } from "./utils/mathOperatorHandlers";
import { MyButton } from "./components/MyButton";
import { Input } from "./components/Input";
import { LABELS } from "./Constants";

function App() {
  const [test, setTest] = useState(0);
  const [finalResult, setFinalResult] = useState(0)
  const [firstNumber, setFirstNumber] = useState(undefined);
  const [secondNumber, setSecondNumber] = useState(undefined);
  const [operator, setOperator] = useState(undefined);
  
  const [isBtnDisabled, setisBtnDisabled] = useState(true);

  const onButtonClickHandler = () => {
    console.log("I was clicked!");
  };

  // useEffect(()=>{console.log(finalResult)},[finalResult])

  useEffect(() => {
    // console.log(secondNumber);
    if (!isNaN(firstNumber) && !isNaN(secondNumber && secondNumber==! null && firstNumber==! null )) {
      setisBtnDisabled(false);
    }
  }, [secondNumber, firstNumber]);

  return (
    <>
      <h1 className="text">{LABELS.FIRST_NUMBER}</h1>
      <Input
        type="number"
        value={firstNumber}
        onChange={setFirstNumber}
        id={"myFirstNumber"}
      />

      <h1 className="text">{LABELS.SECOND_NUMBER}</h1>

      <Input
        type="number"
        value={secondNumber}
        onChange={setSecondNumber}
        id={"mySecondNumber"}
      />

      <div id="buttonsWrapper">
        <MyButton
          className="operator"
          onClick={()=>setFinalResult(mathHandler(firstNumber, secondNumber, "+"))}
          disabled={isBtnDisabled}
          title="+"
        />

        <MyButton
          className="operator"
          onClick={()=>setFinalResult(mathHandler(firstNumber, secondNumber, "-"))}
          disabled={isBtnDisabled}
          title="-"
        />

        <MyButton
          className="operator"
          onClick={()=>setFinalResult(mathHandler(firstNumber, secondNumber, "*"))}
          disabled={isBtnDisabled}
          title="*"
        />

        <MyButton
          className="operator"
          onClick={()=>setFinalResult(mathHandler(firstNumber, secondNumber, "/"))}
          disabled={isBtnDisabled}
          title="/"
        />
      </div>
      <h1>{finalResult}</h1>
    </>
  );
}

export default App;
