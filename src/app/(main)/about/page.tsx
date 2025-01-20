import React from 'react'

const About = async() => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve('About');
        }, 2000);
    })
  return (
    <div>About</div>
  )
}

export default About