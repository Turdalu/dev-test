import React, { useState } from 'react'
import './Input.css'

function Input(props) {
    const [state,setState] = useState('')
    console.log(state);


    function inputHanble (el){
        setState(el.target.value)
    }

    function buttonHanbel () {
        setState('')
        const obj = {
            name:state,
            id:Math.random(),
        }
        props.onSave(obj)
    }



  return (
    <div className='div-1'>
        <input value={state}  onChange={inputHanble} placeholder='texs'/>

        <button onClick={buttonHanbel}>ADD</button>
        <button onClick={buttonHanbel}>ADD</button>
        <button onClick={buttonHanbel}>ADD</button>
        <button onClick={buttonHanbel}>ADD</button>
        <button onClick={buttonHanbel}>ADD</button>
    </div>
  )
}

export default Input