import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-[#639349] text-white py-2 px-6 rounded md:ml-8 hover:bg-[#c0dda5] duration-500'>
      {props.children}
    </button>
  )
}

export default Button