import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [name,setName]=useState({Name:'', Email:'', Password:''});

    function change(e){
      setName ({...name,[e.target.name]: e.target.value});
    }
  
    const submit=(e)=>{
      e.preventDefault()
      console.log(name)
    }
    return (
        <div className='container'>
        <form onSubmit={submit}>
            <div className='header'>SIGNUP</div>
            <div className='name'>
                <input type='textbox' placeholder='Name' size={30} onChange={change} name='Name' required></input><br /><br /></div>
            <div className='mail'>
                <input type='textbox' placeholder='Email' size={30} onChange={change} name='Email' required></input><br /><br /></div>
            <div className='pswd1'>
                <input type='password' placeholder='Password' size={30} onChange={change} name='Password' required></input><br /><br /></div>
            <div className='pswd2'>
                <input type='password' placeholder='Confirm Password' size={30} onChange={change} name='Confirm password' required></input><br /><br /></div>
            <button><Link class='lgn' to={"/login"}>SIGNUP</Link></button>
        </form>
        </div>
    )
}
