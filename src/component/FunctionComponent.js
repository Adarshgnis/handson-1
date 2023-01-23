import React from 'react'
import './css/FunctionComponent.css'

const FunctionComponent = () => {
  return (
    <div className='Functional-div'>
      <h1>This is created using Functional Component</h1>
      <p className='external-paragraph'>This is done using external CSS</p>
      <p className='internal-paragraph' style={{textAlign: 'center', padding: '5px 10px 25px 10px', color:'blue'}}>This is done using external CSS</p>
    </div>
  )
}

export default FunctionComponent
