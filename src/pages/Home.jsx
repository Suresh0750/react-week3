import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {useParams} from 'react-router-dom'
import { setUsers } from '../slice/userSlice'

const Home = () => {
  // const {userName} = useParams()
  const [formInput, setformInput] = useState({
    name :'',
    age : '',
    email : '',
    contactNo : ''
  })
  const dispatch = useDispatch()

  const handleChange = (e)=>{
    console.log(e.target.name)
    console.log(e.target.value)
    const {name,value} = e.target
    setformInput((currentInput)=>{
     return {
      ...currentInput,
      [name] : value
     }
    })
  }

  const addUser = (e)=>{
    e.preventDefault()
    dispatch(setUsers(formInput))
  }
  return (
    <>
      <form onSubmit={handleChange}>
        <label>Name</label> : <br/>
        <input  type="text" name='name' value={formInput.name} onChange={handleChange} required/> <br/>
        <label>Age</label> : <br/>
        <input  type="number" name='age' value={formInput.age} onChange={handleChange} required/> <br/>
        <label>Email</label> : <br/>
        <input  type="email" name='email' value={formInput.email} onChange={handleChange} required/> <br/>
        <label>Contact</label> : <br/>
        <input  type="number" name='contactNo' value={formInput.contactNo} onChange={handleChange}  required/> <br/>
        <button onClick={addUser}>Add</button>
      </form >
    </>
  )
}

export default Home
