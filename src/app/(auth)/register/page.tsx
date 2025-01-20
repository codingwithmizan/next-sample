import React from 'react'

const Register = async() => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve('Register');
        }, 2000);
    })
  return (
    <div>Register</div>
  )
}

export default Register