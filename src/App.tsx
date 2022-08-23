import { clear } from "console";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AnswerButton from "./components/AnswerButton";
import ArithmeticButton from "./components/ArithmeticButton";
import Button from "./components/Button";
import ClearScreenButton from "./components/ClearScreenButton";
import DeleteButton from "./components/DeleteButton";
import { addDigit, calculation, empty, strike } from "./features/inputSlice";
import { RootState } from "./store/store";

function App() {
  const { pastState, presentState, result, sign } = useSelector(
    (state: RootState) => state.edit
  );
  const dispatch = useDispatch();

    //Functions for the different operations(activities)
  const handleInput = (digit: string) => {
    dispatch(addDigit(digit));
    console.log(presentState);
  };

  const handleCalculation = () => {
    dispatch(calculation());
  };

  const handleClear = () => {
    dispatch(empty());
  };

  const handleDelete = () => {
    dispatch(strike());
  };

  return (
    <div className="container">
      <div className="container-screen">{presentState}</div>

      {/* Defining the different buttons and passing their actions as props */}
      <ClearScreenButton clear="C" handleClear={handleClear} />
      <ArithmeticButton operator="()" />
      <ArithmeticButton operator="%" handleInput={handleInput} />
      <ArithmeticButton operator="/" handleInput={handleInput} />
      <Button digit="7" handleInput={handleInput} />
      <Button digit="8" handleInput={handleInput} />
      <Button digit="9" handleInput={handleInput} />
      <ArithmeticButton operator="*" handleInput={handleInput} />
      <Button digit="4" handleInput={handleInput} />
      <Button digit="5" handleInput={handleInput} />
      <Button digit="6" handleInput={handleInput} />
      <ArithmeticButton operator="-" handleInput={handleInput} />
      <Button digit="1" handleInput={handleInput} />
      <Button digit="2" handleInput={handleInput} />
      <Button digit="3" handleInput={handleInput} />
      <ArithmeticButton operator="+" handleInput={handleInput} />
      <DeleteButton remove="DEL" handleDelete={handleDelete} />
      <Button digit="0" handleInput={handleInput} />
      <Button digit="." handleInput={handleInput} />
      <AnswerButton equal="=" handleCalculation={handleCalculation} />
    </div>
  );
}

export default App;
