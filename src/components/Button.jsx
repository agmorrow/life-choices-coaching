import React from 'react'

const Button = (props) => {
  return (
    <button className='font-medium text-[#639349]'>
      {props.children}
    </button>
  )
}

export default Button