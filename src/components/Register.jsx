import React, { useState } from 'react'

const Register = ({close}) => {
    const[logIn,setLogIn] = useState(false);
    const[hide,setHide] = useState(false);
    const show = () =>{
        setHide(prevState => !prevState);
    }
    const[signUpData,setSignUpData] = useState({
        name:"",
        email:"",
        password:"",
    })
    const[logInData,setLogInData] = useState({
        email:"",
        password:"",
    })
    const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setSignUpData(signUpData=>({...signUpData,[name]:value}))
    }
  return (
       <div className='w-full h-full z-50 bg-[rgba(0,0,0,40%)] fixed top-0 left-0 flex justify-center items-center ' onClick={close}>
        <form className=" flex flex-col bg-white p-7 max-w-[700px] gap-3 rounded-lg min-w-[350px] text-black" onClick={(e)=>e.stopPropagation()}>
            <div className="flex justify-between font-bold text-xl pb-3 text-black">
            {logIn?<h1>Sign up</h1>:<h1>Login</h1>} <h1 className='cursor-pointer' onClick={close}>X</h1></div>
            { logIn?
            <input type="text" name='name'  onChange={onChangeHandler} value={signUpData.name} placeholder='Name' className='outline-none border-[1px] border-zinc-400  text-[18px] p-2 rounded-md ' required />:<></>}
            <input type="email" name='email' onChange={onChangeHandler} placeholder='Email address'  className='outline-none border-[1px] border-zinc-400  text-[18px] p-2 rounded-md ' required/>
            <div className="border-[1px] border-zinc-400  text-[18px] p-2 rounded-md flex justify-between">
            <input type={hide?"text":"password"} name="password" onChange={onChangeHandler} placeholder='Password'  className='outline-none  ' required/>{hide?<i className="ri-eye-line cursor-pointer" onClick={show}></i>:<i className="ri-eye-off-line cursor-pointer" onClick={show}> </i>}</div>
            <button type='submit' className='bg-[#1CB69B] py-2 rounded-md text-white'>{logIn?"Create Account":"Login"}</button>
            {logIn?
            <p className='text-zinc-600 text-[15px] pt-3'>Already have an Account? <span className='text-blue-600 cursor-pointer' onClick={(e) => setLogIn(false)}>Click Here</span> </p>:<p className='text-zinc-600 text-[15px] pt-3'>Create  An Account <span className='text-blue-600 cursor-pointer' onClick={(e) => setLogIn(true)}>Click Here</span> </p>}
        </form>
    </div>
  )
}

export default Register
