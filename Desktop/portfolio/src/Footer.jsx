import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <div className='flex justify-around p-4 bg-blue-400'>
        <p className='text-lg text-white'>&copy; {currentYear} Sujal Desai All rights reserved.</p>
    </div>
  )
}

export default Footer