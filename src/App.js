
import React, { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Button from './components/Button';
import Result from './components/Result';
import Footer from './components/Footer';

function App() {

  const [displayedNumber, setDisplayedNumber] = useState("0");

  if(displayedNumber == ""){
    setDisplayedNumber("0")
  }
  
  function handleClick(e){
    const pressedNumber = e.target.innerHTML; 
    if(pressedNumber == "CLR"){
      setDisplayedNumber("0");
    } else if(pressedNumber == "C" && displayedNumber == '0'){
      setDisplayedNumber("0");
    } else if(pressedNumber == "C"){
      setDisplayedNumber(displayedNumber.slice(0,(displayedNumber.length)-1));
    }  else if(pressedNumber == "="){
      handleEval();
    } else {
      setDisplayedNumber((displayedNumber + pressedNumber).replace(/\b0+(\d)/g, '$1'));
    } 
  }


  function handleEval(){
    try{
      var result = eval(displayedNumber);
      setDisplayedNumber(result.toString());
      if(result == "Infinity") throw "error";
      
    } catch (error){
      setDisplayedNumber("ERROR");
      setTimeout(() => {
        setDisplayedNumber("0")
      }, 500);
    }
  }

  return (
    <>
      <Title/>
      <div className = "container">

        <Result display = {displayedNumber}/>

        <div className = "btn-container">
          <Button clickEvent = {handleClick} btnName = "C" btnClass = "c"/>
          <Button clickEvent = {handleClick} btnName = "CLR" btnClass = "clr"/>
          <Button clickEvent = {handleClick} btnName = "7" btnClass = "7"/>
          <Button clickEvent = {handleClick} btnName = "8" btnClass = "8"/>
          <Button clickEvent = {handleClick} btnName = "9" btnClass = "9"/>
          <Button clickEvent = {handleClick} btnName = "/" btnClass = "/"/>
          <Button clickEvent = {handleClick} btnName = "4" btnClass = "4"/>
          <Button clickEvent = {handleClick} btnName = "5" btnClass = "5"/>
          <Button clickEvent = {handleClick} btnName = "6" btnClass = "6"/>
          <Button clickEvent = {handleClick} btnName = "*" btnClass = "*"/>
          <Button clickEvent = {handleClick} btnName = "1" btnClass = "1"/>
          <Button clickEvent = {handleClick} btnName = "2" btnClass = "2"/>
          <Button clickEvent = {handleClick} btnName = "3" btnClass = "3"/>
          <Button clickEvent = {handleClick} btnName = "-" btnClass = "-"/>
          <Button clickEvent = {handleClick} btnName = "0" btnClass = "zero"/>
          <Button clickEvent = {handleClick} btnName = "." btnClass = "."/>
          <Button clickEvent = {handleClick} btnName = "=" btnClass = "="/>
          <Button clickEvent = {handleClick} btnName = "+" btnClass = "+"/>
        </div>
      </div>

      <div className = "footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
