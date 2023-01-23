import React from 'react'
import ClassComponent from './component/ClassComponent'
import FunctionComponent from './component/FunctionComponent'
import {useState} from 'react';
import './App.css';


const App = () => {


    const [show , setshow]=useState(false)
    const [no , setshows]=useState(false)
    const btn1click =()=>{
      setshows(!no)
    }
    const btn2click =()=>{
      setshow(!show)
    }
    
  

  return (
    <div className='Container'>
      <h1 className='Heading'>Styling using Functional and Class Component</h1>
      <div className="header">
        <button className="Function-btn" onClick={btn1click}>To see styling in Functional Component</button>
        <button className="Class-btn" onClick={btn2click}>To see styling in Class Component</button>
      </div>
     
      <div className="section">
      {no && <FunctionComponent/>} {show && <ClassComponent/>}
      </div>
      
    </div>
  )
}


export default App

