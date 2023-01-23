import React, { Component } from 'react'
import './css/ClassComponent.css'

export default class ClassComponent extends Component {
  render() {
    return (
      <div className='Class-div'>
        <h1>This is created using Class Component</h1>
        <p className='external-paragraph'>This is done using external CSS</p>
        <p className='internal-paragraph' style={{textAlign: 'center', padding: '5px 10px 25px 10px', color:'blue'}}>This is done using external CSS</p>
      </div>
    )
  }
}
