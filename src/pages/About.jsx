import React from 'react'
import {useSelector} from 'react-redux'

const About = () => {
  const user = useSelector((state)=> state.userInfo.users)

  console.log(user)
  return (
    <div>
      <h1>
        Wellcome to About Pages
      </h1>
    </div>
  )
}

export default About
