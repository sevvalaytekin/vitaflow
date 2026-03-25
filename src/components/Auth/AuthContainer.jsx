import React from 'react'
import Form from './Form/Form'
import List from './List/List'
import "./AuthContainer.css"

const AuthContainer = () => {
  return (
    <div className='auth-container'>
      <List />
      <Form />
      
      
    </div>
  )
}

export default AuthContainer

