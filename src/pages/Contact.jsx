import React from 'react'
import {useSelector} from 'react-redux'
const Contact = () => {

  const userDetails = useSelector((state)=> state.userInfo.users)
    console.log(userDetails)
  return (
    <div>
      <h1>Wellcome to Contact Pages</h1>
      <h2>User Details</h2>

      {userDetails.map((data)=>{
        return <div>
        <h2>{data.name}</h2>
        <h2>{data.age}</h2>
        <h2>{data.email}</h2>
        <h2>{data.contactNo}</h2>
        </div>
      })}
    </div>
  )
}

export default Contact
