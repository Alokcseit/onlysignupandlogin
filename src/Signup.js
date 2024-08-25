import React from 'react'
import { useReducer } from 'react'
import { signpuReducer } from './SignupReducer'
function Signup() {
    let initialState={
        name:'',
        email:'',
        password:'',
        conformpassword:''
    }
    const[state,dispatch]=useReducer(signpuReducer,initialState)
    const onchangeHandler=(e)=>{
        const {name,value}=e.target
        dispatch(
            {
                type:"SET_VALUE",
                payload:{
                   name,
                   value
                }
            }
        )
    }
    const handleSignup=()=>{
        console.log(state)
    }
  return (
   <>
    <div>
      <h3>Signup</h3>
      <input type="text" name='name' placeholder="name" onChange={onchangeHandler}/>
      <input type="text" name='email' placeholder="email" onChange={onchangeHandler}/>
      <input type="text" name='password' placeholder="password" onChange={onchangeHandler}/>
      <input type="text" name='conformpassword' placeholder="conform password" onChange={onchangeHandler}/>
    </div>
    <div>
      <button name='signup' onClick={handleSignup}>Signup</button>
    </div>
   </>
  )
}

export default Signup
