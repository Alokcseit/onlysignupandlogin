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
    const handleSignup=(e)=>{
        console.log(state)
        e.preventDefault()
        console.log(e)
        if(state.password !== state.conformpassword){
          alert("password not match")
        }
        else{
          localStorage.setItem("user",JSON.stringify(state))
          alert("signup successfull")
          window.location.href="/login"
          dispatch({
            type:"RESET_FORM",
            payload:initialState
          })

        }
    }
  return (
   <>
    <div style={{display:"flex",flexDirection:"column", width:"300px" ,border:"1px solid black"}}>
      <h3>Signup</h3>
      <input type="text" name='name' placeholder="name" value={state.name} onChange={onchangeHandler}/>
      <input type="text" name='email' placeholder="email" value={state.email} onChange={onchangeHandler}/>
      <input type="text" name='password' placeholder="password" value={state.password} onChange={onchangeHandler}/>
      <input type="text" name='conformpassword' placeholder="conform password" value={state.conformpassword} onChange={onchangeHandler}/>
    </div>
    <div>
      <button name='signup' onClick={handleSignup}>Signup</button>
    </div>
   </>
  )
}

export default Signup
