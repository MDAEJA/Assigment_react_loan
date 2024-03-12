// import logo from './logo.svg';
// import { Slider } from '@mui/material';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './component/Header';
import Sliderrange from './component/Sliderrange';

function App() {

  const [homevalue,setHomeValue] = useState(1700);
  const [downPaymentValue,setDownPaymentValue] = useState(180);
  const [loanAmountValue,setLoanAmountValue] = useState(4300);
  const [interestValue,setInterestValue] = useState(2);

  useEffect(()=>{
    // updated the downpayment value with 20%
    const downPayment = homevalue * 0.20
    setDownPaymentValue(downPayment)
    // also updateing the loan amount value
    const loanAmount = homevalue - downPaymentValue
    setLoanAmountValue(loanAmount);
  },[homevalue,downPaymentValue,loanAmountValue])
  return (
    <>
    <Header></Header>
    <div className="main-div">
      <Sliderrange min={1000} max={1700} title={"Home Value"} symbol={"$ "} setValue={setHomeValue} value={homevalue}></Sliderrange>
      <Sliderrange min={0} max={homevalue} title={"Down Payment"} symbol={"$ "} setValue={setDownPaymentValue} value={downPaymentValue}></Sliderrange>
      <Sliderrange min={0} max={homevalue} title={"Loan Amount"} symbol={"$ "} setValue={setLoanAmountValue} value={loanAmountValue}></Sliderrange>
      <Sliderrange min={2} max={18} title={"Interest Rate"} symbol={"% "} setValue={setInterestValue} value={interestValue}></Sliderrange>
      
    </div>
    </>
  );
}

export default App;
