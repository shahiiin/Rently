import React from 'react'
import Nationality from '../components/Nationality'
import SignupForm from '../components/SignupForm'

function signup() {
  return (
    <div>
      <SignupForm />
      <Nationality />
    </div>
  )
}

export default signup