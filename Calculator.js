import React, { useState } from 'react'
import './Calculator.css'

const Calculator = () => {
    //we define state so we can easily manage user input able to calculate age.
    const[birthdate,setBirthdate]=useState('');
    const[age,setAge]=useState(null);
//define function to calculate age.
    const calculateAge=()=>{
        const today=new Date();//means we get the current date.
        const birthDate=new Date(birthdate);//convert input to date.

        const age=today.getFullYear()-birthDate.getFullYear();
        const monthD=today.getMonth()-birthDate.getMonth();

        if(monthD <0 || (monthD===0 && today.getDate()<birthDate.getDate())){
            age--;
        }
        setAge(age);//store age in state.

       


    }
    //define function to reset the button.
     const reset=()=>{
            setBirthdate('');
            setAge(null);
        }
    return(
    <div className='container'> 
   <h1> Age Calculator</h1>
   <p>The age calculator can determine age or interval</p>
   <div className='container_inside'>
    <div className='right'>
        <h4>Date Of Birth</h4>
        <input type='date' value={birthdate} onChange={event=>setBirthdate(event.target.value)}></input>
        <div className='button'>
        <button onClick={calculateAge}>Calculate Age</button>
        <button onClick={reset}>Reset</button>
        </div>
        <div className='left'>
            <h3>Your Age Is:</h3>
        </div>
        <h1>{age!=null? age : ""}</h1> 
    </div>
   </div>
    </div>
  );
}

export default Calculator