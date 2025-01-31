import React from 'react'
import './App.css'
import Card from './card/Card'
import Button from './button/Button'

const App = () => {
  return (
    <div className='main'>
        <div className='container1'>
          <Card />
          <Button />
        </div>
        <div className='container2'>
          <Card />
          <Button />
        </div>
        <div className='container3'>
         <Card />
         <Button />
        </div>
        

    </div>
  )
}

export default App